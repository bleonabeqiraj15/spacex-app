import React from 'react'
import { useQuery } from '@apollo/client';

// queries
import { GET_ROCKETS } from '../../graphql/RocketsQuery'

// components
import BackButton from '../../components/atoms/BackButton';
import RocketItem from '../../components/atoms/RocketItem';
import Error from '../../components/atoms/Error'

const Rockets = () => {

    const { data, loading, error } = useQuery(GET_ROCKETS);
    if (loading) return <div>Loading</div>;
    if (error) return <Error error={error}></Error>

    return (
        <div>
            <div className="rockets">
                <BackButton />
                {data.rockets.map((rocket) => {
                    return <RocketItem rocket={rocket} key={rocket.id}></RocketItem>
                })}
            </div>
        </div>
    )
}

export default Rockets
