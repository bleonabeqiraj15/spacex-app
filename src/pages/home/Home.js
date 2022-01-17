import React from 'react'
import { useQuery } from '@apollo/client';
import Grid from '@mui/material/Grid';
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

    const { founder, employees, founded, name, summary, vehicles, links } = data.company;

    console.log("dat a ", data)




    return (
        <div className="spacex-app">
            <Navbar></Navbar>
            <div className="home container">
                <Grid container
                    alignItems="center"
                    style={{ height: "100%", padding: "20px 0" }}>
                    <Grid item xs={12} lg={2} style={{ padding: "20px", textAlign: "center" }} className='employees'>
                        <div style={{ padding: "10px 0" }}>
                            <h4>{founded}</h4>
                            <p>founded</p>
                        </div>
                        <div style={{ padding: "10px 0" }}>
                            <h4>{employees}</h4>
                            <p>employees</p>
                        </div>
                        <div style={{ padding: "10px 0" }}>
                            <h4>{vehicles}</h4>
                            <p>vehicles</p>
                        </div>

                    </Grid>
                    <Grid item xs={12} lg={8} textAlign="center" style={{ padding: "40px" }} className='founder'>
                        <h2>{founder}</h2>
                        <h6>{summary}</h6>
                    </Grid>
                    <Grid item xs={12} lg={2} textAlign="center" style={{ padding: "0 30px 20px", fontSize: "30px", color: "#000" }} className='social-media'>
                        <div style={{ padding: "10px 0" }}>
                            <FaTwitter />
                        </div>
                        <div style={{ padding: "10px 0" }}>
                            <ImFlickr />
                        </div>
                        <div style={{ padding: "10px 0" }}>
                            <GoDeviceDesktop />
                        </div>

                    </Grid>
                </Grid>
            </div>
        </div >
    )
}

export default Home
