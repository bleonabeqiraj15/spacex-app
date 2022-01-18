import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import Grid from '@mui/material/Grid';

const LaunchInfo = ({ launch }) => {

    const { mission_name, launch_year, rocket, links } = launch;

    return (
        <>
            {/* <Grid item xs={12} sm container spacing={2}>
                <Grid item xs direction="column" container>
                    <Grid item xs>
                        <Typography variant="h3">
                            {mission_name}
                        </Typography>
                        <Typography item component="p">{launch_year}</Typography>
                        <Typography item component="p">{rocket.rocket.id}</Typography>
                    </Grid>
                </Grid>
            </Grid> */}
            {/* <Grid container xs={12} style={{ padding: '25px' }} className='mission'>
                <Grid item xs={12} md={6}>
                    <img src={links.flickr_images[0]} alt="" className='mission-images' />
                </Grid>
                <Grid item xs={12} md={6} style={{ padding: "50px", textAlign: "center" }} className='mission-box'>
                    <Typography variant="h5">
                        {mission_name}
                    </Typography>
                    <Typography item component="p" style={{ color: "#a6a6a6" }}>Launch year: {launch_year}</Typography>
                    <Typography item component="p" style={{ fontSize: "20px" }}>{rocket.rocket.name}</Typography>
                    <a href={links.article_link} target="_blank" rel="noopener noreferrer" className='menu-links'>Read article</a>
                </Grid>
            </Grid > */}



            <Grid container xs={12} style={{ padding: '25px' }} className='mission'>
                <Grid item xs={12} md={6}>
                    <img src={links.flickr_images[0]} alt="" className='mission-images' />
                </Grid>
                <Grid item xs={12} md={6} direction="column" style={{ padding: "50px", textAlign: "center", position: "relative" }} className='mission-box'>
                    <Grid item xs={9}>
                        <Typography variant="h5">
                            {mission_name}
                        </Typography>
                        <Typography item component="p" style={{ color: "#a6a6a6" }}>Launch year: {launch_year}</Typography>
                        <Typography item component="p" style={{ fontSize: "18px" }}>{rocket.rocket.name}</Typography>
                    </Grid>
                    <Grid item xs={3} style={{ position: "absolute", bottom: "12%", right: "0", left: "0" }}>
                        <a href={links.article_link} target="_blank" rel="noopener noreferrer" className='article-link'>Read article</a>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
}

export default LaunchInfo
