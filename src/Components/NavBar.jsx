import React from "react";
import logo from "../assets/img/gb-logo.jpg";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import Baner from "./Baner"



const NavBar = () => {
    return (
        <div className="container-nav">
            <div className="nav justify-content-end">
                <NavLink className="btn btn-outline-secondary" to='/cart'>
                    <CartWidget />
                </NavLink>
                </div>
            <ul className="nav d-flex align-items-center">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page"
                        to='/'><img src={logo} width="68" alt="logo" /></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link link_header" to='/'>Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link link_header" to='/category/bidon'>Bidones</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link link_header" to='/category/sifon'>Sifones</NavLink>
                </li> 
               </ul>
            <Baner/>
          
        </div>

    )
}
export default NavBar;

