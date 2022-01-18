import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackButton = () => {

    return (
        <div className="pos-link">
            <Link to='/' className="link"> <AiOutlineArrowLeft /> Go back</Link>
        </div>
    )
}

export default BackButton
