import React, { useEffect, useState } from 'react'
import { signupStyles as s, signupStyles } from '../assets/dummyStyles'
import { FaArrowLeft, FaCheck, FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logocar.png";
import { toast, ToastContainer } from 'react-toastify';

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

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
        toast.error("Please accept the terms & conditions.", { theme: "dark" });
        return; // stop here if user didn't accept
    }

    // Success case
    toast.success('Account created successfully! Welcome to PremiumDrive', {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        onClose: () => navigate('/login')
    });
};

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

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
                                }} />
                                <span className='tracking-wider font-bold text-white mt-1'>RAAZI TRADERS</span>
                            </div>
                        </div>

                        <h1 className={s.signupCard.title}>
                            Join PremiumDrive
                        </h1>
                        <p className={s.signupCard.subtitle}>
                            Create your exclusive account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className={s.form.container}>
                        <div className={s.form.inputContainer}>
                            <div className={s.form.inputWrapper}>
                                <div className={s.form.inputIcon}>
                                    <FaUser className='text-sm sm:text-base' />
                                </div>
                                <input type="text" name='name' value={formData.name} onChange={handleChange} className={s.form.input} placeholder='Full Name' required style={{ borderRadius: "16px", }} />
                            </div>
                        </div>

                        <div className={s.form.inputContainer}>
                            <div className={s.form.inputWrapper}>
                                <div className={s.form.inputIcon}>
                                    <FaEnvelope className='text-sm sm:text-base' />
                                </div>
                                <input type="email" name='email' value={formData.email} onChange={handleChange} className={s.form.input} placeholder='Email Address' required style={{ borderRadius: "16px", }} />
                            </div>
                        </div>

                        <div className={s.form.inputContainer}>
                            <div className={s.form.inputWrapper}>
                                <div className={s.form.inputIcon}>
                                    <FaLock className='text-sm sm:text-base' />
                                </div>
                                <input type={showPassword ? "text" : "password"} name='password' value={formData.password} onChange={handleChange} className={s.form.input} placeholder='Create Password' required style={{ borderRadius: "16px", }} />

                                <div onClick={togglePasswordVisibility} className={s.form.passwordToggle}>
                                    {showPassword ? (<FaEyeSlash className='text-sm sm:text-base' />) : (<FaEye className='text-sm sm:text-base' />)}
                                </div>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className='flex items-start mt-2 sm:mt-3 md:mt-4'>
                            <div className='flex items-center h-5 mt-0.5 sm:mt-1'>
                                <input type="checkbox" id='terms' name='terms' checked={acceptedTerms} onChange={() => setAcceptedTerms(!acceptedTerms)} className={s.form.checkbox} style={{
                                    boxShadow: "none",
                                }} />
                            </div>
                            <div className='ml-2 sm:ml-3 text-xs sm:text-sm'>
                                <label htmlFor="terms" className={s.form.checkboxLabel}>
                                    I agree to the <span className={s.form.checkboxLink}>Terms & Conditions</span>
                                </label>
                            </div>
                        </div>

                        <button
                            style={{
                                borderRadius: "16px",
                                boxShadow: "0 5px 15px rgba(8,90,20,0.6)",
                            }}
                            type='submit' className={s.form.submitButton}>
                            <span className={s.form.buttonText}>
                                <FaCheck className='text-white text-sm sm:text-base md:text-lg' />
                                CREATE ACCOUNT
                            </span>

                            <div className={s.form.buttonHover} />
                        </button>
                    </form>

                    <div className={s.signinSection} style={{
                        borderColor: "rgba(255,255,255,0.06",
                    }}>
                        <p className={s.signinText}>
                            Already have an account?
                        </p>
                        <a href="/" className={s.signinButton} style={{
                            borderRadius: "16px",
                            boxShadow: "0 2px 10px rgba(245,124,0,0.08)",
                        }}>
                            LOGIN TO YOUR ACCOUNT
                        </a>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                toastStyle={{
                    backgroundColor: "#fb923c",
                    color: "#ffffff",
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(245,124,0,0.18)",
                    fontFamily: "'Montserrat', sans-serif",
                }}
            />

            {/* Font Import */}
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Montserrat', sans-serif; }
        `}
            </style>
        </div>
    )
}

export default SignUp
