import React from "react";
import Pokecard  from "./Pokecard";
import ('./Pokedex.css')

function Pokedex({ PokemonsList }){
    return(
        <div className="Pokedex">
          {PokemonsList.map(p => (
            <Pokecard  key={p.id} id = {p.id} name = {p.name}  type ={p.type}
          base_experience={p.base_experience}
          />))}
        </div>
    )
}
export default Pokedex