import { useEffect, useState } from "react"
import Nocodb from "./nocodb";

function App() {

//   const [pokemons, setPokemons] = useState([]);
//   const [sprite, setSprite] = useState(null);
//   const [numero, setNumero] = useState(0);

//   function consultaPokemons() {

//     const opciones = {
//       method: "GET"
//     }

//     fetch("https://pokeapi.co/api/v2/pokemon?limit=151", opciones)
//     .then(respuesta => respuesta.json())
//     .then(datos => setPokemons(datos.results))
//     .catch(err => console.log(err));
//   }

//   function changeSprite(pokemon){
//     fetch(pokemon.url)
//     .then(respuesta => respuesta.json())
//     .then(datos => setSprite(datos.sprites.front_default))
//     .catch(err => console.log(err));
//   }

//   useEffect(() => {

//     consultaPokemons();

//   }, [])

  //<h1>Pokedex + {numero}</h1>
  //<button onClick={consultaPokemons}>Pedir pokemons</button>
  //<img src={sprite}></img>

  //<ul>
  //  {pokemons.map(pokemon => <li>{pokemon.name} <button onClick={()=> changeSprite(pokemon)}>Sprite</button></li>)}
  //</ul>

  return (
    <>
      <Nocodb />
    </>
  )
}

export default App
