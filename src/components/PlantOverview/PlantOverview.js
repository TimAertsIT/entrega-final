import defaultImage from '../../assets/default-image.jpg';
import { StyledBackground, Styledh1, StyledImg, StyledCard, StyledP, StyledDetail } from './PlantOverview.styles';

const PlantOverview = ({ selectedPlant, handleHidePlantOverview, plantDetails }) => {
  console.log(selectedPlant);
  const plantDetail = plantDetails.find(detail => detail.id === selectedPlant.id);
  const pruningMonths = plantDetail.pruning_month.join(', ');
  const sunlight = plantDetail.sunlight.join(', ');
  return (
    <StyledBackground onClick={handleHidePlantOverview}>
      <StyledCard>
        <Styledh1>{selectedPlant.common_name}</Styledh1>
        <StyledP>{selectedPlant.scientific_name}</StyledP>
        {selectedPlant.default_image ? (
          <StyledImg src={selectedPlant.default_image.regular_url} alt={selectedPlant.common_name} />
        ) : (
          <StyledImg src={defaultImage} alt={selectedPlant.common_name} />
        )}
        <StyledP>{plantDetail.description}</StyledP>
          <StyledDetail>{plantDetail.dimension}</StyledDetail>
          <StyledDetail>Pruning months: {pruningMonths}</StyledDetail>
          <StyledDetail>Sunlight: {sunlight}</StyledDetail>
          <StyledDetail>Watering: {plantDetail.watering}</StyledDetail>
      </StyledCard>
    </StyledBackground>
  );
};

export default PlantOverview;