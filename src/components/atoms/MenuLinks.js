import React from 'react'
import { Link } from 'react-router-dom'

const MenuLinks = () => {
    return (
        <div>
            <Link to="/launches">Launches</Link>
            <br />
            <Link to="/rockets">Rockets</Link>
        </div>
    )
}

export default MenuLinks
