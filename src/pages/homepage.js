import { useState } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import PlantList from '../components/PlantList/PlantList';
import PlantOverview from "../components/PlantOverview/PlantOverview"; 
import { FilterContext } from '../components/Provider/FilterContext';

const HomePage = ( { handlePlantClick, selectedPlant, handleHidePlantOverview, plantDetails, isAuthenticated, handleLogout }) => {
    const [indoorSelected, setIndoorSelected] = useState(false);
    const [outdoorSelected, setOutdoorSelected] = useState(false);
    const [fullShadeSelected, setFullShadeSelected] = useState(false);
    const [partShadeSelected, setPartShadeSelected] = useState(false);
    const [partSunSelected, setPartSunSelected] = useState(false);
    const [fullSunSelected, setFullSunSelected] = useState(false);
    const [frequentSelected, setFrequentSelected] = useState(false);
    const [averageSelected, setAverageSelected] = useState(false);
    const [minimalSelected, setMinimalSelected] = useState(false);
    const [neverSelected, setNeverSelected] = useState(false);
    const [petsSelected, setPetsSelected] = useState(false);
    const [humansSelected, setHumansSelected] = useState(false);
    const [edibleSelected, setEdibleSelected] = useState(false);
    const [treeSelected, setTreeSelected] = useState(false);
    const [birdsSelected, setBirdsSelected] = useState(false);
    const [flowersSelected, setFlowersSelected] = useState(false);
    const [fruitsSelected, setFruitsSelected] = useState(false);

  return (
        <FilterContext.Provider
          value={{
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
          }}
        >
          <div>
          {!selectedPlant ? (
        <>
            <Navigation isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>
            <Header />
            <Filter indoorSelected={indoorSelected}
                    setIndoorSelected={setIndoorSelected}
                    outdoorSelected={outdoorSelected}
                    setOutdoorSelected={setOutdoorSelected}
                    fullShadeSelected = {fullShadeSelected}
                    setFullShadeSelected = {setFullShadeSelected}
                    partShadeSelected = {partShadeSelected}
                    setPartShadeSelected = {setPartShadeSelected}
                    partSunSelected = {partSunSelected}
                    setPartSunSelected = {setPartSunSelected}
                    fullSunSelected = {fullSunSelected}
                    setFullSunSelected = {setFullSunSelected}
                    frequentSelected = {frequentSelected}
                    setFrequentSelected = {setFrequentSelected}
                    averageSelected = {averageSelected}
                    setAverageSelected = {setAverageSelected}
                    minimalSelected = {minimalSelected}
                    setMinimalSelected = {setMinimalSelected}
                    neverSelected = {neverSelected}
                    setNeverSelected = {setNeverSelected}
                    petsSelected = {petsSelected}
                    setPetsSelected = {setPetsSelected}
                    humansSelected = {humansSelected}
                    setHumansSelected = {setHumansSelected}
                    edibleSelected = {edibleSelected}
                    setEdibleSelected = {setEdibleSelected}
                    treeSelected = {treeSelected}
                    setTreeSelected = {setTreeSelected}
                    birdsSelected = {birdsSelected}
                    setBirdsSelected = {setBirdsSelected}
                    flowersSelected = {flowersSelected}
                    setFlowersSelected = {setFlowersSelected}
                    fruitsSelected = {fruitsSelected}
                    setFruitsSelected = {setFruitsSelected}
                    />
            <PlantList handlePlantClick={handlePlantClick} selectedPlant={selectedPlant} handleHidePlantOverview={handleHidePlantOverview} plantDetails={plantDetails} isAuthenticated={isAuthenticated}/>
            </>
      ) : (
                <PlantOverview selectedPlant={selectedPlant} handleHidePlantOverview={handleHidePlantOverview} plantDetails={plantDetails} />
                )}
          </div>
        </FilterContext.Provider>
      );
    };
    
    export default HomePage;