import React from 'react'
import { useQuery } from '@apollo/client';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FaTwitter } from 'react-icons/fa';
import { ImFlickr } from 'react-icons/im';
import { GoDeviceDesktop } from 'react-icons/go';

// query
import { GET_SPACEX_INFO } from '../../graphql/SpacexCompany'

// components
import Error from '../../components/atoms/Error';
import Navbar from '../../components/molecules/Navbar'

const Home = () => {

    const { data, loading, error } = useQuery(GET_SPACEX_INFO);
    if (loading) return <div>Loading</div>;
    if (error) return <Error error={error}></Error>

    const { founder, employees, founded, summary, vehicles, links } = data.company;


    console.log({ data, loading, error })

    return (
        <div className="spacex-app">
            <Navbar></Navbar>
            <div className="home container">
                <Grid container
                    alignItems="center"
                    style={{ height: "100%", padding: "20px 0" }}>
                    <Grid item xs={12} lg={2} style={{ padding: "20px", textAlign: "center" }} className='employees'>
                        <Grid container direction="column" style={{ padding: "10px 0" }}>
                            <Typography item component="h4">{founded}</Typography>
                            <Typography item component="p">founded</Typography>
                        </Grid>
                        <Grid container direction="column" style={{ padding: "10px 0" }}>
                            <Typography item component="h4">{employees}</Typography>
                            <Typography item component="p">employees</Typography>
                        </Grid>
                        <Grid container direction="column" style={{ padding: "10px 0" }}>
                            <Typography item component="h4">{vehicles}</Typography>
                            <Typography item component="p">vehicles</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={8} textAlign="center" style={{ padding: "40px" }} className='founder'>
                        <Typography variant="h1" style={{ paddingBottom: "10px" }} >
                            {founder}
                        </Typography>
                        <Typography variant="p" >
                            {summary}
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} lg={2} textAlign="center" style={{ padding: "30px 20px", fontSize: "30px" }} className='social-media'>
                        <Typography variant="div" style={{ padding: "10px 0" }} >
                            <a href={links.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        </Typography>
                        <Typography variant="div" style={{ padding: "10px 0" }} >
                            <a href={links.flickr} target="_blank" rel="noopener noreferrer"><ImFlickr /></a>
                        </Typography>
                        <Typography variant="div" style={{ padding: "10px 0" }} >
                            <a href={links.website} target="_blank" rel="noopener noreferrer"><GoDeviceDesktop /></a>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}

export default Home
