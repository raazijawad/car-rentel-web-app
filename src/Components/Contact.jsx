import React, { useState } from 'react'
import { contactPageStyles as s } from '../assets/dummyStyles'
import { FaCalendarAlt, FaClock, FaEnvelope, FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        carType: "",
        message: "",
    });

    const [activeField, setActiveField] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    const handleFocus = (field) => {
        setActiveField(field)
    };

    const handleBlur = () => {
        setActiveField(null)
    };

    { /* WHATSAPP API */ }

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMessage =
            `Name: ${formData.name}%0A` +
            `Email: ${formData.email}%0A` +
            `Phone: ${formData.phone}%0A` +
            `Car Type: ${formData.carType}%0A` +
            `Message: ${formData.message}`;
        window.open(`https://wa.me/+918299431275?text=${whatsappMessage}`, '_blank');

    }
    return (
        <div className={s.container}>
            <div className={s.diamondPattern}>
                <div className="w-full h-full" style={{
                    backgroundImage: `
            linear-gradient(30deg, rgba(249,115,22,0.08) 12%, transparent 12.5%, transparent 87%, rgba(249,115,22,0.08) 87.5%, rgba(249,115,22,0.08)),
            linear-gradient(150deg, rgba(249,115,22,0.08) 12%, transparent 12.5%, transparent 87%, rgba(249,115,22,0.08) 87.5%, rgba(249,115,22,0.08)),
            linear-gradient(30deg, rgba(249,115,22,0.08) 12%, transparent 12.5%, transparent 87%, rgba(249,115,22,0.08) 87.5%, rgba(249,115,22,0.08)),
            linear-gradient(150deg, rgba(249,115,22,0.08) 12%, transparent 12.5%, transparent 87%, rgba(249,115,22,0.08) 87.5%, rgba(249,115,22,0.08)),
            linear-gradient(60deg, rgba(234,88,12,0.08) 25%, transparent 25.5%, transparent 75%, rgba(234,88,12,0.08) 75%, rgba(234,88,12,0.08)),
            linear-gradient(60deg, rgba(234,88,12,0.08) 25%, transparent 25.5%, transparent 75%, rgba(234,88,12,0.08) 75%, rgba(234,88,12,0.08))`,
                    backgroundSize: '80px 140px',
                    backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
                }}></div>
            </div>

            {/* FLOATING PARTICLES */}
            <div className={s.floatingTriangles}>
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className={s.triangle}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                            background: i % 3 === 0 ? '#f97316' : i % 3 === 1 ? '#fb923c' : '#fdba74',
                            transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`
                        }}
                    ></div>
                ))}
            </div>

            {/* TITLE */}
            <div className={s.content}>
                <div className={s.titleContainer}>
                    <h1 className={s.title}>Contact Our Team</h1>
                    <div className={s.divider} />
                    <p className={s.subtitle}>
                        Have question about our Premium fleet? Our team is ready to assist with your car rental needs
                    </p>
                </div>

                <div className={s.cardContainer}>
                    <div className={s.infoCard}>
                        <div className={s.infoCardCircle1}></div>
                        <div className={s.infoCardCircle2}></div>

                        <div className='relative z-10 space-y-5'>
                            <h2 className={s.infoTitle}>
                                <FaMapMarkedAlt className={s.infoIcon} /> Our Information
                            </h2>

                            <div className={s.infoItemContainer}>
                                {[
                                    { icon: FaWhatsapp, label: 'WhatsApp', value: '+94 775258589', color: 'bg-green-900/30' },
                                    { icon: FaEnvelope, label: 'Email', value: 'mohdraazi105@gmail.com', color: 'bg-orange-900/30' },
                                    { icon: FaClock, label: 'Hours', value: 'Mon-Sat: 8AM-8PM', color: 'bg-orange-900/30' },
                                ].map((info, i) => (
                                    <div key={i} className={s.infoItem}>
                                        <div className={s.iconContainer(info.color)}>
                                            <info.icon className={i ===0 ? 'text-lg text-green-400' : 'text-orange-400 text-lg'} />
                                        </div>

                                        <div>
                                            <h3 className={s.infoLabel}> 
                                                {info.label}
                                            </h3>
                                            <p className={s.infoValue}>
                                                {info.value}
                                                {i === 2 && <span className='block text-gray-500'>Sunday: 10AM-6PM</span> }
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={s.offerContainer}>
                                <div className="items-center flex">
                                    <FaCalendarAlt className={s.offerIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Contact
