import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios"; 

export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {

    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => { 
      setCharacters(response.data.results);
      
      console.log(response.data.results)
    })
    .catch(error => {
      console.log(error);
    }) 

  },[]); 
  console.log(characters)

  return (
    <section className="character-list grid-view">
      <h2>
        {characters.map(character => (
          <CharacterCard data={character} />
        ))}
      </h2>
    </section>
  );
}