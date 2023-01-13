
import Pokedex from "./Pokedex";
import PokemonsList from "./PokemonsList";
import ('./App.css')

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Pokedex</h1>
      <Pokedex PokemonsList={PokemonsList}/>
    </div>
  );
}

export default App;
