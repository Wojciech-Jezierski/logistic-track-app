import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

const Help = () => {
  return (
    <div className='about'>
        <div className='listContainer'>
            <Navbar />
            <div className='container'>
                <h1>Pomoc</h1>
                <p>Aplikacja została stworzona na potrzeby projektu inżynierskiego.</p>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default Help