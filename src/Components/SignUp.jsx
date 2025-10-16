import React, { useEffect, useState } from 'react'
import { signupStyles as s, signupStyles } from '../assets/dummyStyles'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logocar.png";

const SignUp = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => (
        setIsActive(true)
    ))

    return (
        <div className={s.pageContainer}>
            {/* Animated Background */}
            <div className={s.animatedBackground.base}>
                <div
                    className={`${s.animatedBackground.orb1} ${isActive
                            ? "translate-x-10 sm:translate-x-20 translate-y-5 sm:translate-y-10"
                            : ""
                        }`}
                ></div>
                <div
                    className={`${s.animatedBackground.orb2} ${isActive
                            ? "-translate-x-10 sm:-translate-x-20 -translate-y-5 sm:-translate-y-10"
                            : ""
                        }`}
                ></div>
                <div
                    className={`${s.animatedBackground.orb3} ${isActive
                            ? "-translate-x-5 sm:-translate-x-10 translate-y-10 sm:translate-y-20"
                            : ""
                        }`}
                ></div>
            </div>

            <a href="/" className={s.backButton}>
                <FaArrowLeft className='text-xs sm:text-sm group-hover:-translate-x-1 transition-transform' />
                <span className="font-medium text-xs sm:text-sm">Back to Home</span>
            </a>

            <div className={`${s.signupCard.container} ${isActive ? 'scale-100 opacity-100' : "scale-90 opacity-0"}`}>
                <div className={s.signupCard.card}
                style={{
                    boxShadow: "0px 15px 35px rgba(0,0,0,0.2)",
                    borderRadius: "24px",
                }}>
                    <div className={s.signupCard.decor1} />
                    <div className={s.signupCard.decor2} />

                    <div className={s.signupCard.headerContainer}>
                        <div className={s.signupCard.logoContainer}>
                            <div className={s.signupCard.logoText}>
                                <img src={logo} alt="" className='h-[1.2em] w-auto block object-contain' style={{
                                    display: "block",
                                }}/>
                                <span className='tracking-wider font-bold text-white mt-1'>RAAZI TRADERS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
