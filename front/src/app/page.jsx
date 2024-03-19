'use client'
import Cards from "./cards/Cards";
import Link from "next/link";
import axios from "axios";
import { useEffect } from "react";
//import FormularioPelicula from "./FormularioPelicula"

export default function Home() {
  //TODO: SOLICITAR AL BACK
  let dataCards = [0, 1, 2, 3, 4, 5, 6]
  useEffect(() => {
    const { data } = axios.get('http://localhost:3001/movies')
    data ? dataCards = data : null;
    console.log(data);
  },[]);
  return (
  <div>
    {/* HEADER */}
    <div> 
      <h1>FilmFlow</h1>
    </div>
    {/* SEARCHBAR */}
    <div>
      <h2>SearchBar</h2>
    </div>
    {/* FORM LOGIN - BANNER */}
    <div>
      {/*<h3><FormularioPelicula /></h3>*/}
      <h3>FormularioPelicula</h3>
    </div>
    {/* CARDS */}
    <div>
      <h4><Link href='/'><Cards key={dataCards} values={dataCards} /></Link></h4>
    </div>
  </div>
  );
}
