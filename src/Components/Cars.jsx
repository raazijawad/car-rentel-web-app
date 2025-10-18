import React from 'react'
import { carPageStyles as s } from '../assets/dummyStyles'
import carsData from '../assets/HCarsData'
import { FaArrowRight, FaGasPump, FaShieldAlt, FaTachometerAlt, FaUserFriends } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Cars = () => {


    const navigate = useNavigate();

  return (
    <div className={s.pageContainer}>

        {/* MAIN CONTENT */}
        <div className={s.contentContainer}>
            <div className={s.headerContainer}>
                <div className={s.headerDecoration} />

                <h1 className={s.title}>
                    Premium Car Collection
                </h1>
                <p className={s.subtitle}>
                    Discover our exclusive fleet of luxury vehicles. Each car is meticulously maintained and ready for your journey 
                </p>
            </div>

            <div className={s.gridContainer}>
                {carsData.map((car) => (
                    <div key={car.id} className={s.carCard}>
                        <div className={s.glowEffect} />

                        <div className={s.imageContainer}>
                            <div className='absolute inset-0 z-10' />

                            <img src={car.image} className={s.carImage} alt="" />

                            <div className={s.priceBadge}>
                                LKR{car.price}/day
                            </div>
                        </div>

                        <div className={s.cardContent}>
                            <div className={s.headerRow}>
                                <div>
                                    <h3 className={s.carName}>
                                        {car.name}
                                    </h3>
                                    <p className={s.carType}>{car.type}</p>
                                </div>
                            </div>

                            <div className={s.specsGrid}>

                                <div className={s.specItem}>
                                    <div className={s.specIconContainer}>
                                        <FaUserFriends className='text-sky-400' />
                                    </div>
                                    <span>{car.seats} Seats</span>
                                </div>

                                <div className={s.specItem}>
                                    <div className={s.specIconContainer}>
                                        <FaGasPump className='text-amber-400' />
                                    </div>
                                    <span>{car.fuel}</span>
                                </div>

                                <div className={s.specItem}>
                                    <div className={s.specIconContainer}>
                                        <FaTachometerAlt className='text-emerald-400' />
                                    </div>
                                    <span>{car.mileage}</span>
                                </div>

                                <div className={s.specItem}>
                                    <div className={s.specIconContainer}>
                                        <FaShieldAlt className='text-purple-400' />
                                    </div>
                                    <span>Premium</span>
                                </div>

                            </div>

                            <button onClick={() => navigate(`/cars/${car.id}`, {state: { car }})} className={s.bookButton}>
                                <span className={s.buttonText}>Book Now</span>
                                <FaArrowRight className={s.buttonIcon} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={s.decor1}></div>
            <div className={s.decor2}></div>
        </div>
    </div>
  )
}

export default Cars
