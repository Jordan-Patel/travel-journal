import React from "react";
import { GiWorld } from "react-icons/gi";


export default function Navbar() {
  return(
    <nav className="navbar">
      <GiWorld className="navbar--logo"/>
      <h1 className="title"> my travel journal</h1>
    </nav>
  )
}
