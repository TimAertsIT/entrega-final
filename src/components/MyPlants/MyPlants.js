import { useState, useEffect } from "react";
import { PlantsContext } from '../Provider/Provider';
import { useContext } from 'react';
import { StyledBackground, Styledh1, StyledCard, PictureDiv, PictureDiv2, StyledCardList, StyledImage, CenteredDiv, StyledButton, StyledButton2, StyledWater2, StyledSpan, PruneContainer, StyledCommonName, LoadmoreButton, StyledPrune, StyledWater, StyledInput } from './MyPlants.styles';
import defaultImage from '../../assets/default-image.jpg';
import PlantOverview from '../PlantOverview/PlantOverview';

const MyPlants = () => {
    const { plants, plantDetails } = useContext(PlantsContext);
    const [searchTerm, setSearchTerm] = useState('');
    const loggedInEmail = localStorage.getItem("loggedInEmail");
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((user) => user.email === loggedInEmail);
    const [userPlants, setUserPlants] = useState(user.myPlants);
    const [wateredPlants, setWateredPlants] = useState(() => {
        const wateredPlantsStr = localStorage.getItem('wateredPlants');
        return wateredPlantsStr ? JSON.parse(wateredPlantsStr) : {};
    });
    const [selectedPlant, setSelectedPlant] = useState(null);
    const [hoveredImageUrl, setHoveredImageUrl] = useState(null);

    const handleSelectPlant = plant => {
        setSelectedPlant(plant);
    };

    const handleHidePlantOverview = () => {
        setSelectedPlant(null);
    };


    useEffect(() => {
        const loggedInEmail = localStorage.getItem("loggedInEmail");
        const users = JSON.parse(localStorage.getItem("users"));
        const user = users.find((user) => user.email === loggedInEmail);
        setUserPlants(user.myPlants);
    }, []);

    const handleRemoveFromMyPlants = (plant) => {
        const loggedInEmail = localStorage.getItem("loggedInEmail");
        const users = JSON.parse(localStorage.getItem("users"));
        const user = users.find((user) => user.email === loggedInEmail);
        user.myPlants = user.myPlants.filter((p) => p.id !== plant.id);
        localStorage.setItem("users", JSON.stringify(users));
        setUserPlants(user.myPlants);
    };

    const date = new Date();
    const currentMonth = date.toLocaleString('default', { month: 'long' });
    const checkPruningMonth = (plantDetail) => {
        if (plantDetail.pruning_month && plantDetail.pruning_month.includes(currentMonth)) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        plantDetails.forEach(plantDetail => {
            const lastWatered = localStorage.getItem(`lastWatered_${plantDetail.id}`);
            if (lastWatered) {
                plantDetail.last_watered = new Date(lastWatered);
            }
        });
    }, []);

    const checkWatering = (plantDetail) => {
        let benchmark;
        if (plantDetail.watering_general_benchmark && plantDetail.watering_general_benchmark.value !== null) {
            if (typeof plantDetail.watering_general_benchmark.value === 'string') {
                const valueParts = plantDetail.watering_general_benchmark.value.split('-');
                benchmark = parseInt(valueParts[0], 10);
            } else {
                benchmark = plantDetail.watering_general_benchmark.value;
            }
        } else if (plantDetail.watering) {
            switch (plantDetail.watering) {
                case 'Frequent':
                    benchmark = 4;
                    break;
                case 'Average':
                    benchmark = 7;
                    break;
                case 'Minimum':
                    benchmark = 10;
                    break;
                case 'Never':
                    benchmark = Infinity;
                    break;
                default:
                    benchmark = null;
                    break;
            }
        }
        if (benchmark !== null && benchmark !== Infinity) {
            if (plantDetail.last_watered) {
                const lastWateringDate = new Date(plantDetail.last_watered);
                const currentDate = new Date();
                const timeDiff = currentDate.getTime() - lastWateringDate.getTime();
                const daysSinceLastWatering = Math.floor(timeDiff / (1000 * 3600 * 24));
                return Math.max(0, benchmark - daysSinceLastWatering);
            } else {
                return benchmark;
            }
        }
        return null;
    }

    const handleWaterPlant = (plantId) => {
        const plantDetail = plantDetails.find(plant => plant.id === plantId);
        if (plantDetail) {
            plantDetail.last_watered = new Date();
            localStorage.setItem(`lastWatered_${plantId}`, plantDetail.last_watered.toISOString());
            setWateredPlants(prevState => {
                const newState = { ...prevState, [plantId]: true };
                localStorage.setItem('wateredPlants', JSON.stringify(newState));
                return newState;
            });
        }
    }

    return (
        <div>
            <StyledBackground>
                <Styledh1>Search your plants</Styledh1>
                <CenteredDiv>
                    <StyledInput
                        type="text"
                        placeholder="Search by common name"
                        onChange={event => setSearchTerm(event.target.value)}
                    /> </CenteredDiv>
                <PictureDiv>
                    <Styledh1>Pruning reminders</Styledh1>
                </PictureDiv>
                {plantDetails.filter(plantDetail => plantDetail.common_name.toLowerCase().includes(searchTerm.toLowerCase())).map(plantDetail => {
                    const userPlant = userPlants.find(userPlant => userPlant.id === plantDetail.id);
                    if (!userPlant) {
                        return null;
                    }
                    if (checkPruningMonth(plantDetail)) {
                        console.log(plantDetail);
                        return (
                            <PruneContainer>
                                <StyledPrune key={plantDetail.id}> ✂️ <StyledSpan>{plantDetail.common_name} </StyledSpan> might need to be pruned this month.
                                </StyledPrune>
                            </PruneContainer>
                        );
                    }
                    return null;
                })}
                <PictureDiv2> 
                <Styledh1>Watering reminders</Styledh1>
                </PictureDiv2>
                {plantDetails
                    .filter(plantDetail => plantDetail.common_name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .sort((a, b) => {
                        const daysUntilNextWateringA = checkWatering(a);
                        const daysUntilNextWateringB = checkWatering(b);
                        return daysUntilNextWateringA - daysUntilNextWateringB;
                    })
                    .map(plantDetail => {
                        const userPlant = userPlants.find(userPlant => userPlant.id === plantDetail.id);
                        if (!userPlant) {
                            return null;
                        }
                        const daysUntilNextWatering = checkWatering(plantDetail);
                        if (daysUntilNextWatering !== null) {
                            return (
                                <PruneContainer>
                                    <div key={plantDetail.id}>
                                        {daysUntilNextWatering <= 0 ? (
                                            <StyledWater2> 💧 <StyledSpan> {plantDetail.common_name}</StyledSpan> needs to be watered.</StyledWater2>
                                        ) : (
                                            <StyledWater> 💧 <StyledSpan>{plantDetail.common_name}</StyledSpan> needs to be watered in {daysUntilNextWatering} days.</StyledWater>
                                        )}
                                        <div>
                                            <StyledButton2 onClick={() => handleWaterPlant(plantDetail.id)}>✅ I watered it</StyledButton2>
                                        </div>
                                    </div>
                                </PruneContainer>
                            );
                        }
                        return null;
                    })}
                <Styledh1>My plants</Styledh1>
                {selectedPlant ? (
                    <PlantOverview selectedPlant={selectedPlant} handleHidePlantOverview={handleHidePlantOverview} plantDetails={plantDetails} />
                ) : (
                    <>
                        <StyledCardList>
                            {plantDetails.filter(plantDetail => plantDetail.common_name.toLowerCase().includes(searchTerm.toLowerCase())).map(plantDetail => {
                                const userPlant = userPlants.find(userPlant => userPlant.id === plantDetail.id);
                                if (!userPlant) {
                                    return null;
                                }
                                return (
                                    <StyledCard key={userPlant.id}>
                                        {userPlant.default_image ? (
                                            <StyledImage onClick={() => handleSelectPlant(userPlant)} src={userPlant.default_image.regular_url} alt={userPlant.common_name} />
                                        ) : (
                                            <StyledImage onClick={() => handleSelectPlant(userPlant)} src={defaultImage} alt={userPlant.common_name} height="382" />
                                        )}
                                        <StyledCommonName onClick={() => handleSelectPlant(userPlant)}>
                                            {userPlant.common_name}</StyledCommonName>
                                        <StyledButton onClick={() => handleRemoveFromMyPlants(userPlant)}>Remove from MyPlants</StyledButton>
                                    </StyledCard>
                                );
                            })}
                        </StyledCardList>
                    </>)}
            </StyledBackground>
        </div>
    );
};

export default MyPlants;
