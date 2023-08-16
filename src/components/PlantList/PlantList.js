import { PlantsContext } from '../Provider/Provider';
import { useContext } from 'react';
import { StyledBackground, Styledh1, StyledCard, StyledCardList, StyledImage, StyledButton, StyledCommonName } from './PlantList.styles';
import defaultImage from '../../assets/default-image.jpg';

const PlantList = () => {
  const { plants, plantDetails } = useContext(PlantsContext);

  return (
    <StyledBackground>
      <Styledh1>Matching plants</Styledh1>
      <StyledCardList>
        {plants.map(plant => {
          return (
            <StyledCard key={plant.id}>
                {plant.default_image ? (
                <StyledImage src={plant.default_image.regular_url} alt={plant.common_name} />
              ) : (
                <StyledImage src={defaultImage} alt={plant.common_name} height="401"/>
              )}
              <StyledCommonName>
              {plant.common_name}</StyledCommonName>
              <StyledButton>Add to MyPlants</StyledButton>
            </StyledCard>
          );
        })}
      </StyledCardList>
    </StyledBackground>
  );
};

export default PlantList;