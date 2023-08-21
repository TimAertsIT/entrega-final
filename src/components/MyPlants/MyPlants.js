import { useState, useEffect } from "react";
import { PlantsContext } from '../Provider/Provider';
import { useContext } from 'react';
import { StyledBackground, Styledh1, StyledCard, StyledCardList, StyledImage, StyledButton, StyledCommonName, LoadmoreButton } from './MyPlants.styles';
import defaultImage from '../../assets/default-image.jpg';

const MyPlants = () => {
    const { plants, plantDetails } = useContext(PlantsContext);
    const loggedInEmail = localStorage.getItem("loggedInEmail");
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((user) => user.email === loggedInEmail);
    const [userPlants, setUserPlants] = useState(user.myPlants);

    useEffect(() => {const loggedInEmail = localStorage.getItem("loggedInEmail");
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

    return (
        <div>
            <StyledBackground>
                <Styledh1>My plants</Styledh1>
                <StyledCardList>
                    {plantDetails.map(plantDetail => {
                        const userPlant = userPlants.find(userPlant => userPlant.id === plantDetail.id);
                        if (!userPlant) {
                            return null;
                        }
                        return (
                            <StyledCard key={userPlant.id}>
                                {userPlant.default_image ? (
                                    <StyledImage src={userPlant.default_image.regular_url} alt={userPlant.common_name} />
                                ) : (
                                    <StyledImage src={defaultImage} alt={userPlant.common_name} height="382" />
                                )}
                                <StyledCommonName >
                                    {userPlant.common_name}</StyledCommonName>
                                <StyledButton onClick={() => handleRemoveFromMyPlants(userPlant)}>Remove from MyPlants</StyledButton>
                            </StyledCard>
                        );
                    })}
                </StyledCardList>
            </StyledBackground>
        </div>
    );
};

export default MyPlants;
