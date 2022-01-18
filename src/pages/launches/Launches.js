import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client';

// queries
import { GET_LAUNCHES_INFO } from '../../graphql/PastLaunchesQuery'

// components
import BackButton from '../../components/atoms/BackButton';
import Error from '../../components/atoms/Error';
import Launch from '../../components/organisms/Launch';
import Navbar from '../../components/molecules/Navbar';

const Launches = () => {

    const { data, loading, error } = useQuery(GET_LAUNCHES_INFO);
    if (loading) return <div>Loading</div>;
    if (error) return <Error error={error}></Error>

    const launches = data.launchesPast.filter(
        launch => launch.links.article_link && launch.links.flickr_images.length > 0
    );
    console.log(data)

    return (
        <div>
            <div className='missions'>
                <Navbar />
                <BackButton />
                <Launch launches={launches}></Launch>
            </div>
        </div>
    )
}

export default Launches
