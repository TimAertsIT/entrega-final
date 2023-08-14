import {useState, useEffect} from "react";
import axios from "axios"; 
import { PlantsContext } from '../src/components/Provider/Provider';
import Router from './app/Router';
import { GlobalStyle } from './App.styles.js'; 

const App = () => {
  const [plants, setPlants] = useState([]);

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

  return (
    <>
      <GlobalStyle />
      <PlantsContext.Provider value={plants}>
        <Router />
      </PlantsContext.Provider>
    </>
  );
}


export default App;