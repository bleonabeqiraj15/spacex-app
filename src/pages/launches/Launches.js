import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client';

// queries
import { GET_LAUNCHES_INFO } from '../../graphql/PastLaunchesQuery'

// components
import BackButton from '../../components/atoms/BackButton';
import Error from '../../components/atoms/Error';
// import LaunchesInfo from '../../components/molecules/LaunchesInfo';
import Launch from '../../components/organisms/Launch';
import Navbar from '../../components/molecules/Navbar';

const Launches = () => {

    // const rocketId = useParams().id;

    // const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
    //     variables: { rocketId },
    // });


    const { data, loading, error } = useQuery(GET_LAUNCHES_INFO);
    if (loading) return <div>Loading</div>;
    if (error) return <Error error={error}></Error>

    console.log(data)
    const launches = data.launchesPast.filter(
        launch => launch.links.article_link && launch.links.flickr_images.length > 0
    );

    return (
        <div>
            <Navbar />
            <BackButton />
            <Launch launches={launches}></Launch>
        </div>
    )
}

export default Launches
