import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';

const MenuLinks = () => {
    return (
        <Grid container
            alignItems="center"
            style={{ height: "90%" }}>
            <Grid item xs={6} >
                <Link to="/launches">Launches</Link>
            </Grid>
            <Grid item xs={6}>
                <Link to="/rockets">Rockets</Link>
            </Grid>
        </Grid >
    )
}

export default MenuLinks
