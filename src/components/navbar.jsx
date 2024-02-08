import React from "react";
import logo from "../assets/logo.jpeg"
import './navbar.css';

export default function Navbar(){
    return(
        <nav class="navbar">
            <img src= { logo } alt="" />
            <p>MemeCraft</p>
        </nav>
    )
}