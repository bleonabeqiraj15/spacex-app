import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io';

const RocketID = ({ rocket }) => {
    const imgStyle = {
        backgroundImage: 'url(../images/' + rocket.id + '.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        minHeight: '100vh',
    };

    console.log(rocket, "RROCKET")

    return (

        <>
            <div style={imgStyle}>
                <div className="rocketInfo pos-item">

                    {/* <h1>{rocket.name.toUpperCase()}</h1> */}
                    <div className="container rocket-name text-shadow">
                        <h3>{rocket.country}</h3>
                        <h2>{rocket.name.toUpperCase()}</h2>
                        <p>
                            <Link to={`/rockets/${rocket.id}`} className="link">Read more <IoIosArrowForward /></Link>
                        </p>
                    </div>
                    <hr />
                    <div className="rocketDetails">
                        <div className="text-shadow">
                            <div className="rocketParameters">
                                <h3>{rocket.height.meters}m</h3>
                            </div>
                            <h6>height</h6>
                        </div>
                        <div className="text-shadow">
                            <div className="rocketParameters">
                                <h3>{rocket.diameter.meters}m</h3>
                            </div>
                            <h6>diameter</h6>
                        </div>
                        <div className="text-shadow">
                            <div className="rocketParameters">
                                <h3>{rocket.mass.kg}kg</h3>
                            </div>
                            <h6>mass</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RocketID
