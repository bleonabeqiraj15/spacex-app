import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const RocketsInfo = ({ rocket }) => {

    const { name, country, height, diameter, description, stages, cost_per_launch, engines } = rocket;

    const imgStyle = {
        backgroundImage: 'url(../images/' + rocket.id + '.png)',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
    };

    return (
        <div>
            <div style={imgStyle}>
                <div className="pos-link">
                    <Link to='/rockets' className="link" style={{ color: '#000' }}>Go back <AiOutlineArrowLeft /></Link>
                </div>

                <div className="roc-details">
                    <div>
                        {/* <h1>{rocket.name.toUpperCase()}</h1> */}
                        <h3>{country}</h3>
                        <h2>{name.toUpperCase()}</h2>
                        <div className="falcon">

                        </div>
                    </div>
                    {/* <div className="rocketDetails">
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
                    </div> */}
                </div>
            </div>

            <div className="test">

            </div>
        </div>
    )
}

export default RocketsInfo
