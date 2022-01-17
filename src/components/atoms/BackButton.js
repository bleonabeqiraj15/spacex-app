import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackButton = () => {

    return (
        <div className="pos-link">
            {/* <Link to="/">Go back to home</Link> */}
            <Link to='/' className="link">Go back <AiOutlineArrowLeft /></Link>
        </div>
    )
}

export default BackButton
