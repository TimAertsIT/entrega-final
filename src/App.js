import {useState, useEffect} from "react";
import axios from "axios"; 
import { PlantsContext } from '../src/components/Provider/Provider';
import Router from './app/Router';
import { GlobalStyle } from './App.styles.js'; 

const App = () => {
  const [plants, setPlants] = useState([]);
  const [plantDetails, setPlantDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://perenual.com/api/species-list?page=1&key=sk-APOK64bf9bf56ec241667');
        setPlants(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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

  return (
    <>
      <GlobalStyle />
      <PlantsContext.Provider value={ { plants, plantDetails }}>
        <Router />
      </PlantsContext.Provider>
    </>
  );
}


export default App;