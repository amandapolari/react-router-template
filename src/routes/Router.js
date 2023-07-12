import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile/:name" element={<ProfilePage />} />
                {/* bolachina é a propriedade que aparace quando uso o useParams */}
                {/* <Route path="/profile/:bolachina" element={<ProfilePage />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
