import React from 'react'
import Grid from '@mui/material/Grid';

// components
import LaunchInfo from '../atoms/LaunchInfo'

const Launch = ({ launches }) => {

    return (
        <div className="pages-height container">
            <Grid container>
                {
                    launches.map((launch) => {
                        return <Grid item xs={12} lg={6} key={launch.id}>
                            <LaunchInfo launch={launch}></LaunchInfo>
                        </Grid>
                    })
                }
            </Grid>
        </div >
    )
}

export default Launch
