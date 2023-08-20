import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from "../pages/homepage";
import NotFoundPage from "../pages/notfoundpage";
import RegisterPage from "../pages/registerpage";
import LoginPage from "../pages/loginpage";
import Plantlist from "../components/PlantList/PlantList"; 

const Router = ({isAuthenticated,
    setIsAuthenticated, handlePlantClick, 
    selectedPlant
}) =>
    <BrowserRouter>
        <Routes>
            <Route index element={<Homepage />} />
            <Route path="/plantlist" element={<Plantlist handlePlantClick={handlePlantClick} selectedPlant={selectedPlant} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter >
    ;

export default Router;