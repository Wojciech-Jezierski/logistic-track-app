import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

const About = () => {
  return (
    <div className='about'>
        <div className='listContainer'>
            <Navbar />
            <div className='container'>
                <h1>O aplikacji</h1>
                <p>Aplikacja została stworzona na potrzeby projektu inżynierskiego.</p>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default About