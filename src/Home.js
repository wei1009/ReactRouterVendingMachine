import React from "react";
import "./Home.css"
import Option from "./Option";

function Home(){
    return(
        <>
        <div className="Home">Hello, I am a vending machine. What would you want?</div>
        <div><Option /></div>
        <img src = "https://images.unsplash.com/photo-1552349471-57c1b1cce2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80" 
        alt="vending machine" ></img>
        </>
    )
}

export default Home;
