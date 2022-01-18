import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const RocketsInfo = ({ rocket }) => {

    const { name, height, diameter, description, stages, cost_per_launch, engines } = rocket;

    const imgStyle = {
        backgroundImage: 'url(../images/' + rocket.id + '.png)',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
    };

    const mgTop = {
        marginTop: "20px",
        borderBottom: "2px solid #939294"
    }

    return (

        <div style={imgStyle}>
            <div className="pos-link">
                <Link to='/rockets' className="link" style={{ color: '#000' }}><AiOutlineArrowLeft /> Go back </Link>
            </div>

            <Grid container style={{ p: 2, margin: 'auto', maxWidth: 450, flexGrow: 1, padding: "100px 60px 30px" }} className='roc-details'>
                <Grid item xs={12} sm container spacing={2}>
                    <Grid item xs direction="column" container>
                        <Grid item xs>
                            <Typography variant="h3">
                                {name}
                            </Typography>
                            <Typography variant="body1" style={{ marginTop: "45px" }}>
                                {description}
                            </Typography>
                        </Grid>
                        <Grid container direction="row" justifyContent="space-between" style={mgTop}>
                            <Typography item component="p">height</Typography>
                            <Typography item component="p">{height.meters} m</Typography>
                        </Grid>
                        <Grid container direction="row" justifyContent="space-between" style={mgTop}>
                            <Typography item component="p">diameter</Typography>
                            <Typography item component="p">{diameter.meters} m</Typography>
                        </Grid>
                        <Grid container direction="row" justifyContent="space-between" style={mgTop}>
                            <Typography item component="p">stages</Typography>
                            <Typography item component="p">{stages}</Typography>
                        </Grid>
                        <Grid container direction="row" justifyContent="space-between" style={mgTop}>
                            <Typography item component="p">cost_per_launch</Typography>
                            <Typography item component="p">{cost_per_launch} $</Typography>
                        </Grid>
                        <Grid container direction="row" justifyContent="space-between" style={mgTop}>
                            <Typography item component="p">engines</Typography>
                            <Typography item component="p">{engines.number}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default RocketsInfo
