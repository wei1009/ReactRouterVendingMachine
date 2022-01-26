import React from "react";
import { Link } from "react-router-dom";
import "./Soda.css"

function Soda() {
  return (
    <div className="Soda">
      <h1>OMG! SUGARRRRR!</h1>
      <h3><Link to="/">go back</Link></h3>
      <img src = "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
        alt="soda" ></img>
    </div>
  );
}

export default Soda;
