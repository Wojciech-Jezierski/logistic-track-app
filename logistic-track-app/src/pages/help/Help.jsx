import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import "./help.scss";

const Help = () => {
  return (
    <div className='about'>
      <Navbar />
        <div className='contentContainer'>
            <div className='container'>
                <h1>Pomoc</h1>
                <p>Aby rozpocząć użytkowanie aplikacji należy się zalogować danymi, które zostały podane w firebase.</p>
                <p>W pasku nawigacji znajdują się cztery zakładki:</p>
                  <ul>
                    <li>Mapa</li>
                    <li>O aplikacji</li>
                    <li>Użytkownicy</li>
                    <li>Pomoc</li>
                  </ul>
                <br></br>
                <p>Po wejściu w zakładkę mapy na ekranie wyświetla się mapa wraz ze znacznikami, które oznaczają lokalizację kierowców. Mapa posiada możliwość oddalania i przybliżania oraz tryb pełnoekranowy.</p><br></br>
                <p>W kolejnej zakładce o nazwie o aplikacji widnieją informacje na temat aplikacji oraz o autorze.</p><br></br>
                <p>
                  Następnie w zakładce użytkownicy wyświetlana jest lista wszystkich dostępnych użytkowników w tabeli, która posiada kolumny takie jak: Użytkownik, Imię i nazwisko, typ pracownika, Email, Telefon oraz akcja.
                  Jest możliwość usunięcie każdego użytkownika przyciskiem "Delete". W prawym górnym rogu jest dostępny przycisk, za pośrednictwem, którego można dodać nowego użytkownika. Po wciśnięciu przycisku należy wypełnić formularz z danymi nowego użytkownika.
                  Na początku należy wybrać zdjęcie, które będzie widniało jako zdjęcie profilowe przy użytkowniku, później jest nazwa użytkownika, imię i nazwisko, email, telefon, hasło do konta, typ pracownika oraz kraj pochodzenia. Po wypełnieniu wszystkich pól 
                  wymagane jest wciśnięcie przycisku "Send", wtedy nowy użytkownik zostanie dodany do bazy danych.
                </p>
            </div>
        </div>
            <Footer />
    </div>
  )
}

export default Help