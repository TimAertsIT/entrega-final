import { useState, useEffect } from "react";
import axios from "axios";
import { PlantsContext } from '../src/components/Provider/Provider';
import Router from './app/Router';
import { GlobalStyle } from './App.styles.js';

const App = () => {
  const [plants, setPlants] = useState([]);
  const [plantDetails, setPlantDetails] = useState([]);
  const [page, setPage] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const handlePlantClick = (plant) => {
    setSelectedPlant(plant);
  }
  const handleHidePlantOverview = () => {
    setSelectedPlant(null);
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://perenual.com/api/species-list?page=${page}&key=sk-APOK64bf9bf56ec241667`);
        if (page === 1) {
          setPlants(response.data.data);
        } else {
          setPlants(prevPlants => [...prevPlants, ...response.data.data]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      try {
        const promises = plants.map(plant => axios.get(`https://www.perenual.com/api/species/details/${plant.id}?key=sk-APOK64bf9bf56ec241667`));
        const responses = await Promise.all(promises);
        setPlantDetails(responses.map(response => response.data));
      } catch (error) {
        console.error(error);
      }
    };
    if (plants.length > 0) {
      fetchPlantDetails();
    }
  }, [plants]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <GlobalStyle />
      <PlantsContext.Provider value={{ plants, plantDetails, loadMore }}>
        <Router 
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        handlePlantClick={handlePlantClick}
        selectedPlant={selectedPlant}
        handleHidePlantOverview={handleHidePlantOverview}
        plantDetails={plantDetails}
        />
      </PlantsContext.Provider>
    </>
  );
}


export default App;