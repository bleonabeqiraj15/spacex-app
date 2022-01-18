import React from 'react'
import Grid from '@mui/material/Grid';

// components
import Logo from '../atoms/Logo'
import MenuLinks from '../atoms/MenuLinks'

const Navbar = () => {
    return (
        <div className='container'>
            <Grid container
                alignItems="center"
                style={{ height: "90%", paddingTop: "20px" }}>
                <Grid item xs={6} sm={6} lg={9} className='employees'>
                    <Logo></Logo>

                </Grid>
                <Grid item xs={6} sm={6} lg={3} textAlign="center" className='menu-links'>
                    <MenuLinks></MenuLinks>
                </Grid>

            </Grid>
        </div>
    )
}

export default Navbar
