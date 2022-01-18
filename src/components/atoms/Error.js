import React from 'react'

const Error = ({ error }) => {
    return (
        <div className='text-center'>
            <h3>{error.message}</h3>
        </div>
    )
}

export default Error
