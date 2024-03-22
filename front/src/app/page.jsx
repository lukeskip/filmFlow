'use client'
import { useRouter } from "next/navigation";
import axios from "axios";
import Movies from "./movies/Movies";
import Carousel from "./carousel/Carousel";
import { useState, useEffect } from "react";

const Landing = () => {
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_URL
  const [movie, setMovie] = useState(
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

  return(
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
    <Link href="/form">
            <button>Ir a Formulario</button>
        </Link>
    </div>
    {/* FILTROS RÁPIDOS */}
    <div>
       <h3>Section filters</h3> 
    </div>
    {/* COLLECTIONS */}
    <div>

export default Landing;