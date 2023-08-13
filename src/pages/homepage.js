import { PlantsContext } from '../components/Provider/Provider';
import Navigation from '../components/Navigation/Navigation';
import { useContext } from 'react';

const HomePage = () => {
  const plants = useContext(PlantsContext);

  return (
    <div>
        <Navigation />
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
  );
}

export default HomePage;