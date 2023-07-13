import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import ErroPage from '../pages/ErroPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile/:name" element={<ProfilePage />} />
                <Route path="*" element={<ErroPage />} />
                {/* bolachina é a propriedade que aparace quando uso o useParams */}
                {/* <Route path="/profile/:bolachina" element={<ProfilePage />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
