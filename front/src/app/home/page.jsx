'use client'
import axios from "axios";
import Movies from "../movies/Movies";
import Carousel from "../carousel/Carousel";
import Navbar from "../navbar/Navbar"
import { useState, useEffect } from "react";
import Link from 'next/link';

const Home = () => {
  const URL = process.env.NEXT_PUBLIC_URL
  const [movie, setMovie] = useState(
    [{
      id: 'cargando',
      title: 'cargando'
    }]
  )
  useEffect(() => {
    const getMovies = async() => {
      let { data } = await axios.get(`${URL}fake`)
      setMovie(data)
    }

    getMovies()
  },[]);

  return (
  <div>
    {/* HEADER */}
    <nav>
      <Navbar/>
    </nav>
    {/* 
    <div className="container">
      {/* TITLE 
      <div> 
        <h1>FilmFlow</h1>
      </div>
      {/* SEARCHBAR 
      <div>
        <h2>SearchBar</h2>
      </div>
      <div>
        <h2>UserInfo</h2>
      </div>
    </div>
    */}
    {/* FORM MOVIE
    <div className="container">
      <Link href="/form">
        <button>Ir a Formulario</button>
      </Link>
    </div>*/}
    {/* CARROUSEL */}
    <Carousel movie={movie}/>
    {/* FILTROS RÁPIDOS */}
    <div>
      <h3>Section filters</h3> 
    </div>
    {/* COLLECTIONS */}
    <div>
      <h3>Novedades</h3>
      <Movies movie={movie} />
      <h5>Ver más..</h5>
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

export default Home;