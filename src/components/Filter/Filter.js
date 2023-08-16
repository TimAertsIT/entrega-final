import { FilterButton, FilterWrapper, SelectButton, StyledP, AlignDiv, FilterArea } from './Filter.styles';
import { useState } from 'react';

const Filter = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handleFilterButtonClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <>
      <FilterWrapper>
      {!showButtons &&
      <span role="img" aria-label="filter">🔍</span> }
        <FilterButton onClick={handleFilterButtonClick}>
        {showButtons ? 'X Close the filter' : 'Find plants that match your space'}
        </FilterButton>
      </FilterWrapper>
      {showButtons && (
        <>
        <FilterArea >
          <StyledP>Are you searching an indoor or an outdoor plant?</StyledP>
          <AlignDiv>
          <SelectButton>Indoor</SelectButton>
          <SelectButton>Outdoor</SelectButton>
          </AlignDiv>
          <StyledP>Will the plant receive a lot of sunlight?</StyledP>
          <AlignDiv>
          <SelectButton>Full shade</SelectButton>
          <SelectButton>Part shade</SelectButton>
          <SelectButton>Part sun</SelectButton>
          <SelectButton>Full sun</SelectButton>
          </AlignDiv>
          <StyledP>Do you want a plant that needs watering...</StyledP>
          <AlignDiv>
          <SelectButton>Frequent</SelectButton>
          <SelectButton>Average</SelectButton>
          <SelectButton>Minimal</SelectButton>
          <SelectButton>Never</SelectButton>
          </AlignDiv>
          <StyledP>Mark other options that you prefer</StyledP>
          <AlignDiv>
          <SelectButton>Safe for pets</SelectButton>
          <SelectButton>Safe for humans</SelectButton>
          <SelectButton>Edible</SelectButton>
          <SelectButton>Tree</SelectButton>
          <SelectButton>Attracts birds</SelectButton>
          <SelectButton>Carries flowers</SelectButton>
          <SelectButton>Carries fruits</SelectButton>
          </AlignDiv>
          </FilterArea>
        </>
      )}
    </>
  );
};

export default Filter;