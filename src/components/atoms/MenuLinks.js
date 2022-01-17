import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';

const MenuLinks = () => {
    return (
        <div>
            {/* <Link to="/launches">Launches</Link>
            <br />
            <Link to="/rockets">Rockets</Link> */}
            <Grid container
                alignItems="center"
                style={{ height: "90%" }}>
                <Grid item xs={6} style={{ textAlign: "right" }} className='founder'>
                    <Link to="/launches">Launches</Link>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "right" }} className='founder'>
                    <Link to="/rockets">Rockets</Link>
                </Grid>
            </Grid >
        </div >

    )
}

export default MenuLinks
