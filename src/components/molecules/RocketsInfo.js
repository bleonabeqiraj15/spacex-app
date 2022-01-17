import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const RocketsInfo = ({ rocket }) => {

    const { name, country, height, diameter, description, stages, cost_per_launch, engines } = rocket;

    const imgStyle = {
        backgroundImage: 'url(../images/' + rocket.id + '.png)',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
    };

    return (

        <div style={imgStyle}>
            <div className="pos-link">
                <Link to='/rockets' className="link" style={{ color: '#000' }}>Go back <AiOutlineArrowLeft /></Link>
            </div>

            <Grid container style={{ p: 2, margin: 'auto', maxWidth: 400, flexGrow: 1, padding: "100px 30px" }} className='roc-details'>
                <Grid item xs={12} sm container>
                    <Grid item xs container spacing={2}>
                        <Grid item xs>
                            <Typography variant="h2">
                                {name}
                            </Typography>
                            <Typography variant="body1">
                                {description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ID: 1030114
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default RocketsInfo
