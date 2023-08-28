import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from "../pages/homepage";
import NotFoundPage from "../pages/notfoundpage";
import RegisterPage from "../pages/registerpage";
import LoginPage from "../pages/loginpage";
import MyPlantsPage from "../pages/myplantspage";
import Plantlist from "../components/PlantList/PlantList";

const Router = ({ isAuthenticated,
    setIsAuthenticated, handlePlantClick,
    selectedPlant, handleHidePlantOverview, plantDetails, handleLogout
}) =>
    <BrowserRouter>
        <Routes>
            <Route index element={<Homepage handleLogout={handleLogout} handlePlantClick={handlePlantClick} selectedPlant={selectedPlant} handleHidePlantOverview={handleHidePlantOverview} plantDetails={plantDetails} isAuthenticated={isAuthenticated} />} />
            <Route path="/plantlist" element={<Plantlist handlePlantClick={handlePlantClick} isAuthenticated={isAuthenticated} selectedPlant={selectedPlant} handleHidePlantOverview={handleHidePlantOverview} plantDetails={plantDetails} />} />
            <Route path="/register" element={<RegisterPage isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
            <Route path="/myplants" element={isAuthenticated ? (
                <MyPlantsPage plantDetails={plantDetails} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            ) : (
                <Navigate to="/login" />
            )
            }
            />
            <Route path="/login" element={<LoginPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="*" element={<NotFoundPage isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
        </Routes>
    </BrowserRouter >
    ;

export default Router;