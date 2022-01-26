import React from "react";
import { Link } from "react-router-dom";
import "./FreshSardines.css"

function FreshSardines() {
  return (
    <div className="sardines">
      <h1>You don't eat the sardines. The sardines, they eat you!</h1>
      <h3><Link to="/">go back</Link></h3>
      <img src = "https://images.unsplash.com/photo-1622391075054-518eafc230f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
        alt="sardines" ></img>
    </div>
  );
}

export default FreshSardines;
