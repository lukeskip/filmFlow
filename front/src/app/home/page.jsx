'use client'
import Link from "next/link";
import axios from "axios";
import Movies from "../movies/Movies";
import Carousel from "../carousel/Carousel";
import { useState, useEffect } from "react";

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
      <Carousel movie={movie}/>
    </div>
    {/* FILTROS RÁPIDOS */}
    <div>
      <h3>Section filters</h3> 
    </div>
    {/* COLLECTIONS */}
    <div>
      <div>
        <h3>Novedades</h3>
        <h4><Link href='/'><Movies movie={movie} /></Link></h4>
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

export default Home;