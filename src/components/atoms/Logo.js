import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div>
            <Link to="/"><img src="../images/spaceXlogo-removebg-preview.png" alt="spaceXlogo" className="spaceXlogo" /></Link>
        </div>
    )
}

export default Logo
