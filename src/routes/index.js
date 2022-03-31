import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from '../views/Home';
import BasicView from '../views/Basic';
import QueueView from '../views/Queue';
import StackView from '../views/Stack';

function AppRoutes() {
    return (
        <Routes>
            <Route name="home" exact path="/" element={<HomeView />} />
            <Route name="queue" path="/basic" element={<BasicView />} />
            <Route name="queue" path="/queue" element={<QueueView />} />
            <Route name="stack" path="/stack" element={<StackView />} />
        </Routes>
    );
}

export default AppRoutes;
