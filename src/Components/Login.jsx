import React, { useState } from 'react'
import { loginStyles } from '../assets/dummyStyles'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={loginStyles.pageContainer}>
            {/* Animated Dark Background */}
            <div className={loginStyles.animatedBackground.base}>
                <div className={`${loginStyles.animatedBackground.orb1} ${isActive ? 'translate-x-20 translate-y-10' : ''}`} />
                <div className={`${loginStyles.animatedBackground.orb2} ${isActive ? '-translate-x-20 -translate-y-10' : ''}`} />
                <div className={`${loginStyles.animatedBackground.orb3} ${isActive ? '-translate-x-10 translate-y-20' : ''}`} />
            </div>

            <a href="/" className={loginStyles.backButton}>
            <FaArrowLeft className="text-sm sm:text-base" />
            <span className="font-medium text-xs sm:text-sm">Back To Home</span>
            </a>

            {/* LOGIN CARD */}
            <div>
                
            </div>
        </div>
    )
}

export default Login
