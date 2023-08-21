import { PlantsContext } from '../Provider/Provider';
import { useContext } from 'react';
import { StyledBackground, Styledh1, StyledCard, StyledCardList, StyledImage, StyledButton, StyledCommonName, LoadmoreButton } from './PlantList.styles';
import defaultImage from '../../assets/default-image.jpg';
import { FilterContext } from '../Provider/FilterContext';
import { useState, useEffect } from "react";
import PlantOverview from '../PlantOverview/PlantOverview';

const PlantList = ({ handlePlantClick, selectedPlant, isAuthenticated }) => {
    const { plants, plantDetails, loadMore } = useContext(PlantsContext);
    const {
        indoorSelected,
        outdoorSelected,
        fullShadeSelected,
        partShadeSelected,
        partSunSelected,
        fullSunSelected,
        frequentSelected,
        averageSelected,
        minimalSelected,
        neverSelected,
        petsSelected,
        humansSelected,
        edibleSelected,
        treeSelected,
        birdsSelected,
        flowersSelected,
        fruitsSelected
    } = useContext(FilterContext);

    const [filteredPlantDetails, setFilteredPlantDetails] = useState([]);
    console.log(selectedPlant);
    console.log(isAuthenticated);
    useEffect(() => {
        const newFilteredPlantDetails = plantDetails.filter(plantDetail => {
            // indoor-outdoor filter
            if (indoorSelected && !plantDetail.indoor) {
                return false;
            }
            if (outdoorSelected && plantDetail.indoor) {
                return false;
            }

            // sunlight filter
            if (fullShadeSelected && !plantDetail.sunlight.includes("full shade")) {
                return false;
            }
            if (partShadeSelected && !plantDetail.sunlight.includes("part shade")) {
                return false;
            }
            if (partSunSelected && !plantDetail.sunlight.includes("part sun")) {
                return false;
            }
            if (fullSunSelected && !plantDetail.sunlight.includes("full sun")) {
                return false;
            }
            // water filter 
            if (frequentSelected && plantDetail.watering !== "frequent" && plantDetail.watering !== "Frequent") {
                return false;
            }
            if (averageSelected && plantDetail.watering !== "average" && plantDetail.watering !== "Average") {
                return false;
            }
            if (minimalSelected && plantDetail.watering !== "minimal" && plantDetail.watering !== "Minimal") {
                return false;
            }
            if (neverSelected && plantDetail.watering !== "never" && plantDetail.watering !== "Never") {
                return false;
            }
            // other filters
            if (petsSelected && plantDetail.poisonous_to_pets !== 0) {
                return false;
            }
            if (humansSelected && plantDetail.poisonous_to_humans !== 0) {
                return false;
            }
            if (edibleSelected && !plantDetail.cuisine) {
                return false;
            }
            if (treeSelected && plantDetail.type !== "tree") {
                return false;
            }
            if (birdsSelected && !plantDetail.attracts.includes("birds")) {
                return false;
            }
            if (flowersSelected && !plantDetail.flowers) {
                return false;
            }
            if (fruitsSelected && !plantDetail.fruits) {
                return false;
            }
            return true;
        });
        setFilteredPlantDetails(newFilteredPlantDetails);
    }, [plantDetails, fullShadeSelected, partShadeSelected, partSunSelected, fullSunSelected, indoorSelected, outdoorSelected, frequentSelected, averageSelected, minimalSelected, neverSelected, petsSelected, humansSelected, edibleSelected, treeSelected, birdsSelected, flowersSelected, fruitsSelected]);

    console.log(filteredPlantDetails);
    useEffect(() => {
        if (filteredPlantDetails.length < 30) {
            loadMore();
        }
    }, [filteredPlantDetails]);

    const handleAddToMyPlants = (plant, isAuthenticated) => {
        console.log(isAuthenticated); 
        if (isAuthenticated) {
          const loggedInEmail = localStorage.getItem("loggedInEmail");
          const users = JSON.parse(localStorage.getItem("users"));
          const user = users.find((user) => user.email === loggedInEmail);
          user.myPlants.push(plant);
          localStorage.setItem("users", JSON.stringify(users));
        } else {
          alert("You need to be logged in to add plants");
        }
      };

    return (
        <div>
            <StyledBackground>
                <Styledh1>Matching plants</Styledh1>
                <StyledCardList>
                    {filteredPlantDetails.map(plantDetail => {
                        const plant = plants.find(plant => plant.id === plantDetail.id);
                        if (!plant) {
                            return null;
                        }
                        return (
                            <StyledCard key={plant.id}>
                                {plant.default_image ? (
                                    <StyledImage onClick={() => handlePlantClick(plant)} src={plant.default_image.regular_url} alt={plant.common_name} />
                                ) : (
                                    <StyledImage onClick={() => handlePlantClick(plant)} src={defaultImage} alt={plant.common_name} height="382" />
                                )}
                                <StyledCommonName onClick={() => handlePlantClick(plant)} >
                                    {plant.common_name}</StyledCommonName>
                                <StyledButton onClick={() => handleAddToMyPlants(plant, isAuthenticated)}>Add to MyPlants</StyledButton>
                            </StyledCard>
                        );
                    })}
                </StyledCardList>
                <LoadmoreButton onClick={loadMore}>Load more</LoadmoreButton>
            </StyledBackground>
        </div>
    );
};

export default PlantList;
