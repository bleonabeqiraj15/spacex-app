import React from 'react'

// components
import LaunchInfo from '../atoms/LaunchInfo'

const Launch = ({ launches }) => {

    console.log("llaunch ", launches)

    return (
        <div className="spacexData">
            {
                launches.map((launch) => {
                    return <LaunchInfo launch={launch} key={launch.id}></LaunchInfo>
                })
            }
        </div>
    )
}

export default Launch
