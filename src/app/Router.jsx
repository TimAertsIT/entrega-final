import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from "../pages/homepage";
import NotFoundPage from "../pages/notfoundpage";
import RegisterPage from "../pages/registerpage";

const Router = () =>
    <BrowserRouter>
        <Routes>
            <Route index element={<Homepage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter >
    ;

export default Router;