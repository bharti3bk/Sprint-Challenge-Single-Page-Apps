import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function Locationslist(props) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get( `https://rickandmortyapi.com/api/location/`)
      .then(response => {
        setLocations(response.data.results);
      })
      .catch(error => {
          console.log(error);
      })
  }, []);  
  
  console.log(locations); 

  return (
    <section className="character-list grid-view">
      <h2>
        {locations.map(locations => (
          <LocationCard data= {locations} />
        ))}
      </h2>
    </section>
  );
}