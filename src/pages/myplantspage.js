import Navigation from "../components/Navigation/Navigation";
import MyPlants from "../components/MyPlants/MyPlants";

const MyPlantsPage = ( { plantDetails, isAuthenticated, handleLogout }) => {
  return (
    <div>
    <Navigation isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>
    <MyPlants plantDetails={plantDetails} />
    </div>
  );
};
export default MyPlantsPage;