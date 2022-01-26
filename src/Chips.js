import React, { useState } from "react";
import { Link } from "react-router-dom";
import chipsImg from "./Chips.png";
import "./Chips.css";

function Chips() {
  const [bags, setBags] = useState([]);

  function handleClick() {
    const x = window.innerWidth * Math.random()/10;
    const y = window.innerHeight * Math.random()/5;
    setBags(prevBags => [...prevBags, { x, y }]);
  }

  const chipsBag = bags.map((bag, i) => (
    <img
      key={i}
      src={chipsImg}
      className="bag"
      style={{ top: `${bag.y}vh`, left: `${bag.x}vw ` ,Width:`3em`}}
      alt="bag of lay's chips"
    />
  ));

  return (
    <div className="Chips">
       <h1>Bags eaten: {bags.length}</h1>
       <button className="ChipsBtn" onClick={handleClick}>nom nom nom</button>
       <h3>
          <Link to="/">go back</Link>
        </h3>
        {chipsBag}
    </div>
  );
}

export default Chips;
