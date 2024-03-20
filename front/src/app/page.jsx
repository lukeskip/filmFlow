'use client'
import Cards from "./cards/Cards";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import FormularioPelicula from "./form/form";

export default function Home() {
  const [content, setContent] = useState(
    [{
      id: 'cargando',
      title: 'cargando'
    }]
  )
  useEffect(() => {
    const getMovies = async() => {
      let { data } = await axios.get('http://localhost:3001/fake')
      setContent(data)
    }
    getMovies()
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
       <h3><FormularioPelicula /></h3> 
      <h3>FormularioPelicula</h3>
    </div>
    {/* CARDS */}
    <div>
      <h4><Link href='/'><Cards key={content.id} values={content} /></Link></h4>
    </div>
  </div>
  );
}
