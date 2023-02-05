import React, { useState } from 'react';
import { useContext } from "react";
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {AuthContext} from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Nav = styled.nav`
  background: #2B303A;
  height: 80px;
  display: flex;
  justify-content: space-between;
  // padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-size: 25px;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  
`;

export const Button = styled.button `
  background: #256ce1;
  color: white;
  font-size: 25px;
  width: 170px;
  height: 50px;
  cursor: pointer;
  margin-top: 17px;
  margin-right: 50px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  
  @media screen and (min-width: 2000px) {
    margin-right: 150px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavLogo = styled.div `
  margin-top: 15px;
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }

  @media screen and (min-width: 2000px) {
    margin-left: 150px;
  }
`

export const NavLogoSm = styled.div `
  margin-top: 17px;
  margin-left: 20px;

  @media screen and (min-width: 1000px) {
    display: none;
  }

`




const COLORS = {
  primaryDark: "#2B303A",
  primaryLight: "#FFF",
};

const MenuLabel = styled.label`
  position: fixed;
  top: -14px;
  right: 20px;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  z-index: 1000;
  text-align: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavBackground = styled.div`
  position: fixed;
  top: -5px;
  right: 12px;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "white")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: #FFF;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;


function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const navitage = useNavigate()
  const {dispatch} = useContext(AuthContext)

  const logout = (userCredential) => {
    const user = userCredential.user;
    dispatch({type:"LOGOUT", payload:user})
    navitage("/")
  };

  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/about">
              O aplikacji
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/users">
              Użytkownicy
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/help">
              Pomoc
            </ItemLink>
          </li>
          <li>
          <ItemLink onClick={logout} to='/login'>
                Wyloguj
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;
