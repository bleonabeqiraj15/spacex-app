import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';

const LaunchInfo = ({ launch }) => {

    console.log(launch, "...LAUNCH")

    return (
        <Card sx={{ width: 400 }} className='cardInfo' >
            <CardMedia
                component="img"
                height="194"
                image={launch.links.flickr_images[0]}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {launch.mission_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {launch.launch_year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {launch.rocket.rocket.id}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button variant="contained" size="medium">
                    Medium
                </Button>
            </CardActions>
        </Card>
    )
}

export default LaunchInfo
