import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Home from '../pages/home/Home'
import Launches from '../pages/launches/Launches'
import Rockets from '../pages/rockets/Rockets'
import Rocket from '../components/organisms/Rocket';

const Routing = () => {
    return (
        <div>
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} ></Route>
                        <Route path="/launches" element={<Launches />} ></Route>
                        <Route path="/rockets" element={<Rockets />} ></Route>
                        <Route path="/rockets/:id" element={<Rocket />} ></Route>
                        <Route path="*" element={<Home />} ></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default Routing
