import React from 'react'
import {NavLink } from "react-router-dom";
import SignUp from './SignUp/SignUp'

const LandingPage = () => {
    return (
        <div>
            <SignUp />
            <span>or continue as a</span>
            <NavLink to='/TarotReading'>Guest</NavLink>

        </div>
    )
}

export default LandingPage
