import React from "react";
import ("./Pokecard.css")

const Pokecard = ({id, name, type, base_experience}) =>(
<div className="Pokecard">
    <h4 className="Pokecard-header">{name}</h4>
    <img className="CartItem-img"  
         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
         alt=""/>
    <ul className="Pokecard-ul">
      <li className="Pokecard-li">Type: ${type}</li>
      <li className="Pokecard-li">EXP: {base_experience}</li>
    </ul>
</div>
)

export default Pokecard;