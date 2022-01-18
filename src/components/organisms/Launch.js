import React from 'react'
import Grid from '@mui/material/Grid';

// components
import LaunchInfo from '../atoms/LaunchInfo'

const Launch = ({ launches }) => {

    console.log("llaunch ", launches)

    return (
        <div className="pages-height container">
            <Grid container xs={12}>
                {
                    launches.map((launch) => {
                        return <Grid xs={12} xl={6}>
                            <LaunchInfo launch={launch} key={launch.id}></LaunchInfo>
                        </Grid>
                    })
                }
            </Grid>
        </div >
    )
}

export default Launch
