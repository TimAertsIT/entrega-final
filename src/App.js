import {useState, useEffect} from "react";
import axios from "axios"; 

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
    <div>
      <h1>Plant List</h1>
      <ul>
        {plants.map(plant => (
          <li key={plant.id}>{plant.common_name}
          {plant.default_image && (
            <img src={plant.default_image.regular_url} alt={plant.common_name} width="80" />
          )}
        </li>
      ))}
    </ul>
  </div>
);}


export default App;