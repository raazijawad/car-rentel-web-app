import React from 'react'
import { footerStyles as styles } from '../assets/dummyStyles'
import { Link } from 'react-router-dom'
import logo from '../assets/logocar.png'
import { FaEnvelope, FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Icon } from 'lucide-react'
import { GiCarKey } from 'react-icons/gi'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.topElements}>
                <div className={styles.circle1} />
                <div className={styles.circle2} />
                <div className={styles.roadLine} />
            </div>

            <div className={styles.innerContainer}>
                <div className={styles.grid}>
                    <div className={styles.brandSection}>
                        <Link to="/" className="flex items-center">
                            <div className={styles.logoContainer}>
                                <img src={logo} alt="" className='h-[1em] w-auto block'
                                    style={{
                                        display: 'block',
                                        objectFit: 'contain',
                                    }} />
                                <span className={styles.logoText}>RAAZI TRADERS</span>
                            </div>
                        </Link>
                        <p className={styles.description}>
                            Premium car rentel services with the latest models and exceptional customer services. Drive your dream car today!
                        </p>
                        <div className={styles.socialIcons}>
                            {
                                [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                                    <a href="#" key={i} className={styles.socialIcon}>
                                        <Icon />
                                    </a>
                                ))
                            }
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className={styles.sectionTitle}>
                            Quick Links
                            <span className={styles.underline} />
                        </h3>
                        
                        <ul className={styles.linkList}>
                            {['Home', 'Cars', 'Contact Us'].map((link, i) => (
                                <li key={i}>
                                    <a href={link === 'Home' ? '/' : link === 'Contact Us' ? '/contact' : '/cars'} className={styles.linkItem}>
                                        <span className={styles.bullet}></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT US */}
                    <div>
                        <h3 className={styles.sectionTitle}>
                            Contact Us
                            <span className={styles.underline} />
                        </h3>

                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <FaMapMarkerAlt className={styles.contactIcon} />
                                <span>123, Drive Avenue, Auto City, CA 90201</span>
                            </li>

                            <li className={styles.contactItem}>
                                <FaPhone className={styles.contactIcon} />
                                <span>+94 775258589</span>
                            </li>

                            <li className={styles.contactItem}>
                                <FaEnvelope className={styles.contactIcon} />
                                <span>mohdraazi105@gmail.com</span>
                            </li>
                        </ul>

                        <div className={styles.hoursContainer}>
                            <h4 className={styles.hoursTitle}>Business Hours</h4>
                            <div className={styles.hoursText}>
                                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                                <p>Saturday: 9:00 AM - 6:00 PM</p>
                                <p>Sunday: 10:00 AM - 4:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* NEWS LETTER */}
                    <div>
                        <h3 className={styles.sectionTitle}>
                            News Letter
                            <span className={styles.underline} />
                        </h3>
                        <p className={styles.newsletterText}>
                            Subscribe for special offers and updates 
                        </p>

                        <form className="space-y-3">
                            <input type="email" placeholder='Enter Your Address' className={styles.input} />

                            <button type='submit' className={styles.subscribeButton}>
                                <GiCarKey className="mr-2 text-lg sm:text-xl" />
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>

                {/* NEWS LETTER */}
                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} RAAZI TRADERS. All right reserved.</p>
                    <p className='mt-3 md:mt-0'>
                        Designed by <a href="https://raazi-jawad-portfolio.vercel.app/" target='_blank'
                        rel='noopener noreferrer' className={styles.designerLink}>Raazi jawad</a>
                    </p>
                </div>
            </div>
        </footer >
    )
}

export default Footer
