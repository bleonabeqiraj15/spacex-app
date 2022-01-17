import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GET_ROCKET_INFO } from '../../graphql/RocketsQuery'

// components
import RocketsInfo from '../molecules/RocketsInfo';
import Error from '../atoms/Error';


const Rocket = () => {
    const rocketId = useParams().id;

    const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
        variables: { rocketId }
    });

    console.log(rocketId)

    if (loading) return <div>loading</div>;
    if (error) return <Error error={error}></Error>

    return (
        <div>
            <RocketsInfo rocket={{ ...data.rocket }}></RocketsInfo>
        </div>
    )
};

export default Rocket;