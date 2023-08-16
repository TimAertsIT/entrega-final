import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import PlantList from '../components/PlantList/PlantList';

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Filter />
      <PlantList />
    </div>
  );
};

export default HomePage;