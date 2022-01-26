import React from "react";
import { NavLink } from "react-router-dom";
import "./Option.css"

const Option = () => {
    return (
        <nav className="Option"> 
            <NavLink to="/FreshSardines">Fresh Sardines</NavLink>
            <NavLink to="/Soda">Soda</NavLink>
            <NavLink to="/Chips">Chips</NavLink>
        </nav>
    )
}

export default Option;