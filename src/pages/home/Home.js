import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/molecules/Navbar'


// components
// import MenuLinks from '../../components/atoms/RocketID'

const Home = () => {
    return (
        <div className="spacex-app">
            <Navbar></Navbar>
            {/* <MenuLinks></MenuLinks> */}
            {/* <Link to="/launches">Launches</Link>
            <br />
            <Link to="/rockets">Rockets</Link> */}
        </div>
    )
}

export default Home
