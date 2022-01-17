import React from 'react'

// components
import Logo from '../atoms/Logo'
import MenuLinks from '../atoms/MenuLinks'

const Navbar = () => {
    return (
        <div className='navbar container'>
            <Logo></Logo>
            <MenuLinks></MenuLinks>
        </div>
    )
}

export default Navbar
