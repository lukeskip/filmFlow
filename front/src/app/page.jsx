'use client'
import Cards from "./cards/Cards";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieForm from "./form/form";



export default function Home() {
  const URL = process.env.NEXT_PUBLIC_URL
  const [content, setContent] = useState(
    [{
      id: 'cargando',
      title: 'cargando'
    }]
  )
  useEffect(() => {
    const getMovies = async() => {
      // let { data } = await axios.get({URL})
      let { data } = await axios.get('http://localhost:3001/movies')
      setContent(data)
    }
    getMovies()
  },[]);

  return (
  <div>
    {/* HEADER */}
    <div className="container">
      {/* TITLE */}
      <div> 
        <h1>FilmFlow</h1>
      </div>
      {/* SEARCHBAR */}
      <div>
        <h2>SearchBar</h2>
      </div>
      <div>
        <h2>UserInfo</h2>
      </div>
    </div>
    {/* CARROUSEL */}
    <div>
       <h3><MovieForm /></h3> 
    </div>
    {/* FILTROS RÁPIDOS */}
    <div>
       <h3>Section filters</h3> 
    </div>
    {/* COLLECTIONS */}
    <div>
      <div>
        <h3>Novedades</h3>
        <h4><Link href='/'><Cards key={content.id} values={content} /></Link></h4>
        <h5>Ver más..</h5>
      </div>
      <div>
        <h3>Novedades</h3>
        <h4><Link href='/'><Cards key={content.id} values={content} /></Link></h4>
        <h5>Ver más..</h5>
      </div>
    </div>
    {/* FOOTER */}
    <div>
      <div>
        <h4>FOOTER</h4>
      </div>
    </div>
  </div>
  );
}
