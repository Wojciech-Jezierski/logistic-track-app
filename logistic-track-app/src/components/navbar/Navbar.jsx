import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
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
//   const { dispatch } = useContext(DarkModeContext);
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
                    Track map
                </NavLink>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/users'>
                    Users
                </NavLink>
                <NavLink to='/help'>
                    Help
                </NavLink>
            </NavMenu>
                <Button onClick={logout} to='/login'>
                    <GrLogout />
                    Logout
                </Button>
        </Nav>
    </>
  );
};

export default Navbar;
