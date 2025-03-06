import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects'
import Resume from './Pages/Resume';


const allRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </Router>

    )
}

export default allRoutes;