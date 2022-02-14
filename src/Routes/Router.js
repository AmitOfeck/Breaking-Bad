import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Character from '../Pages/Character';
import Main from '../Pages/Main';

function Router(props) {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Main />} />
                <Route path="/:id" exact element={<Character />} />
            </Routes>
        </div>
    );
}

export default Router;