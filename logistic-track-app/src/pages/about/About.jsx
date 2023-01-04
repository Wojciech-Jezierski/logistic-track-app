import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <div className='about'>
      <Navbar />
        <div className='contentContainer'>
            <div className='container'>
                <h1>O aplikacji</h1>
                <p><b>Logistic track app</b> - Jest to aplikacja stworzona dla firm logistycznych aby ułatwić proces transportu. Dzięki niej można zaoszczędzić sporo czasu na lokalizowaniu pracowników.</p>
                <p>Służy do zarządzania kontami pracowników oraz lokalizowaniu kierowców.</p>
                <p>Aplikacja została stworzona na potrzeby projektu inżynierskiego.</p><br></br><br></br>
                <p>Autorem projektu jest: <b>Wojciech Jezierski</b></p>
                <p>Numer albumu: <b>53410</b></p>
                <p>Grupa: <b>INIS7_FD</b></p>
                <p>Specjalizacja: <b>Front-end developer</b></p>
                <p>Promotor: <b>Dr. Artur Ziółkowski</b></p>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default About