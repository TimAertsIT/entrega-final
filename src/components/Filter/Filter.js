import { FilterButton, FilterWrapper, SelectButton, StyledP, AlignDiv, FilterArea } from './Filter.styles';
import { useState } from 'react';
import { FilterContext } from '../Provider/FilterContext';

const Filter = ({
    indoorSelected,
    setIndoorSelected,
    outdoorSelected,
    setOutdoorSelected,
    fullShadeSelected,
    setFullShadeSelected,
    partShadeSelected,
    setPartShadeSelected,
    partSunSelected,
    setPartSunSelected,
    fullSunSelected,
    setFullSunSelected,
    frequentSelected,
    setFrequentSelected,
    averageSelected,
    setAverageSelected,
    minimalSelected,
    setMinimalSelected,
    neverSelected,
    setNeverSelected,
    petsSelected,
    setPetsSelected,
    humansSelected,
    setHumansSelected,
    edibleSelected,
    setEdibleSelected,
    treeSelected,
    setTreeSelected,
    birdsSelected,
    setBirdsSelected,
    flowersSelected,
    setFlowersSelected,
    fruitsSelected,
    setFruitsSelected
}) => {
    const [showButtons, setShowButtons] = useState(false);

    const handleFilterButtonClick = () => {
        setShowButtons(!showButtons);
    };
    const handleIndoorClick = () => {
        const newIndoorSelected = !indoorSelected;
        setIndoorSelected(newIndoorSelected);
        if (newIndoorSelected) {
            setOutdoorSelected(false);
        }
    };
    const handleOutdoorClick = () => {
        const newOutdoorSelected = !outdoorSelected;
        setOutdoorSelected(newOutdoorSelected);
        if (newOutdoorSelected) {
            setIndoorSelected(false);
        }
    };
    const handleFullShadeClick = () => {
        const newFullShadeSelected = !fullShadeSelected;
        setFullShadeSelected(newFullShadeSelected);
        if (newFullShadeSelected) {
            setPartShadeSelected(false);
            setPartSunSelected(false);
            setFullSunSelected(false);
        }
    };
    const handlePartShadeClick = () => {
        const newPartShadeSelected = !partShadeSelected;
        setPartShadeSelected(newPartShadeSelected);
        if (newPartShadeSelected) {
            setFullShadeSelected(false);
            setPartSunSelected(false);
            setFullSunSelected(false);
        }
    };
    const handlePartSunClick = () => {
        const newPartSunSelected = !partSunSelected;
        setPartSunSelected(newPartSunSelected);
        if (newPartSunSelected) {
            setFullShadeSelected(false);
            setPartShadeSelected(false);
            setFullSunSelected(false);
        }
    };
    const handleFullSunClick = () => {
        const newFullSunSelected = !fullSunSelected;
        setFullSunSelected(newFullSunSelected);
        if (newFullSunSelected) {
            setFullShadeSelected(false);
            setPartShadeSelected(false);
            setPartSunSelected(false);
        }
    };
    const handleFrequentClick = () => {
        const newFrequentSelected = !frequentSelected;
        setFrequentSelected(newFrequentSelected);
        if (newFrequentSelected) {
            setAverageSelected(false);
            setMinimalSelected(false);
            setNeverSelected(false);
        }
    };
    const handleAverageClick = () => {
        const newAverageSelected = !averageSelected;
        setAverageSelected(newAverageSelected);
        if (newAverageSelected) {
            setFrequentSelected(false);
            setMinimalSelected(false);
            setNeverSelected(false);
        }
    };
    const handleMinimalClick = () => {
        const newMinimalSelected = !minimalSelected;
        setMinimalSelected(newMinimalSelected);
        if (newMinimalSelected) {
            setFrequentSelected(false);
            setAverageSelected(false);
            setNeverSelected(false);
        }
    };
    const handleNeverClick = () => {
        const newNeverSelected = !neverSelected;
        setNeverSelected(newNeverSelected);
        if (newNeverSelected) {
            setFrequentSelected(false);
            setAverageSelected(false);
            setMinimalSelected(false);
        }
    };
    const handlePetsClick = () => {
        setPetsSelected(!petsSelected);
    };
    const handleHumansClick = () => {
        setHumansSelected(!humansSelected);
    };
    const handleEdibleClick = () => {
        setEdibleSelected(!edibleSelected);
    };
    const handleTreeClick = () => {
        setTreeSelected(!treeSelected);
    };
    const handleBirdsClick = () => {
        setBirdsSelected(!birdsSelected);
    };
    const handleFlowersClick = () => {
        setFlowersSelected(!flowersSelected);
    };
    const handleFruitsClick = () => {
        setFruitsSelected(!fruitsSelected);
    };

        return (
            <>
                <FilterWrapper>
                    {!showButtons && <span role="img" aria-label="filter">🔍</span>}
                    <FilterButton onClick={handleFilterButtonClick}>
                        {showButtons ? 'X Close the filter' : 'Find plants that match your space'}
                    </FilterButton>
                </FilterWrapper>
                {showButtons && (
                    <>
                        <FilterArea>
                            <StyledP>Are you searching an indoor or an outdoor plant?</StyledP>
                            <AlignDiv>
                                <SelectButton selected={indoorSelected} onClick={handleIndoorClick}>
                                    Indoor
                                </SelectButton>
                                <SelectButton selected={outdoorSelected} onClick={handleOutdoorClick}>
                                    Outdoor
                                </SelectButton>
                            </AlignDiv>
                            <StyledP>Will the plant receive a lot of sunlight?</StyledP>
                            <AlignDiv>
                                <SelectButton selected={fullShadeSelected} onClick={handleFullShadeClick}>
                                    Full shade
                                </SelectButton>
                                <SelectButton selected={partShadeSelected} onClick={handlePartShadeClick}>
                                    Part shade
                                </SelectButton>
                                <SelectButton selected={partSunSelected} onClick={handlePartSunClick}>
                                    Part sun
                                </SelectButton>
                                <SelectButton selected={fullSunSelected} onClick={handleFullSunClick}>
                                    Full sun
                                </SelectButton>
                            </AlignDiv>
                            <StyledP>Do you want a plant that needs watering...</StyledP>
                            <AlignDiv>
                                <SelectButton selected={frequentSelected} onClick={handleFrequentClick}>
                                    Frequent
                                </SelectButton>
                                <SelectButton selected={averageSelected} onClick={handleAverageClick}>
                                    Average
                                </SelectButton>
                                <SelectButton selected={minimalSelected} onClick={handleMinimalClick}>
                                    Minimal
                                </SelectButton>
                                <SelectButton selected={neverSelected} onClick={handleNeverClick}>
                                    Never
                                </SelectButton>
                            </AlignDiv>
                            <StyledP>Mark other options that you prefer</StyledP>
                            <AlignDiv>
                                <SelectButton selected={petsSelected} onClick={handlePetsClick}>
                                    Safe for pets
                                </SelectButton>
                                <SelectButton selected={humansSelected} onClick={handleHumansClick}>
                                    Safe for humans
                                </SelectButton>
                                <SelectButton selected={edibleSelected} onClick={handleEdibleClick}>
                                    Edible
                                </SelectButton>
                                <SelectButton selected={treeSelected} onClick={handleTreeClick}>
                                    Tree
                                </SelectButton>
                                <SelectButton selected={birdsSelected} onClick={handleBirdsClick}>
                                    Attracts birds
                                </SelectButton>
                                <SelectButton selected={flowersSelected} onClick={handleFlowersClick}>
                                    Carries flowers
                                </SelectButton>
                                <SelectButton selected={fruitsSelected} onClick={handleFruitsClick}>
                                    Carries fruits
                                </SelectButton>
                            </AlignDiv>
                        </FilterArea>
                    </>
                )}
            </>
        )
    };

    export default Filter;