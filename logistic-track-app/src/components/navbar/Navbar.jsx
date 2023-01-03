import "./navbar.scss";
import { useContext } from "react";
import Logo from "../../Assets/Logo.png";
import {AuthContext} from "../../context/AuthContext"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Button,
  NavLogo
} from './NavbarElements';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { GrLogout } from 'react-icons/gr';
import { IconContext } from "react-icons";


const Navbar = () => {
  const navitage = useNavigate()
  const {dispatch} = useContext(AuthContext)

const logout = (userCredential) => {
    const user = userCredential.user;
    dispatch({type:"LOGOUT", payload:user})
    navitage("/")
  };

  return (
    <>
        <Nav>
            <NavLogo to='/'>
                
                    <img src={Logo}></img>
                
            </NavLogo>
            <Bars />
            <NavMenu>
                <NavLink to='/'>
                    Mapa
                </NavLink>
                <NavLink to='/about'>
                    O aplikacji
                </NavLink>
                <NavLink to='/users'>
                    Użytkownicy
                </NavLink>
                <NavLink to='/help'>
                    Pomoc
                </NavLink>
            </NavMenu>
                <Button onClick={logout} to='/login'>
                    <GrLogout />
                    Wyloguj
                </Button>
        </Nav>
    </>
  );
};

export default Navbar;
