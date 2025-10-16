import React from 'react'
import NavBar from '../Components/NavBar'
import HomeBanner from '../Components/HomeBanner'
import HomeCars from '../Components/HomeCars'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeBanner />
      <HomeCars />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
