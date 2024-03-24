'use client'
import axios from "axios";
import Movies from "../movies/Movies";
import Carousel from "../carousel/Carousel";
import Navbar from "../navbar/Navbar"
import { useState, useEffect } from "react";
import Filters from "../filters/Filters";

const Home = () => {
  const URL = process.env.NEXT_PUBLIC_URL
  const [movie, setMovie] = useState(
    [{
      id: 'cargando',
      title: 'cargando'
    }]
  )
  const [genres, setGenres] = useState(
    [{
      id: 'cargando',
      name: 'cargando'
    }]
  )
  useEffect(() => {
    const getMovies = async() => {
      let { data } = await axios.get(`${URL}movies`)
      setMovie(data)
    }

    const getGenres = async() => {
      let { data } = await axios.get(`${URL}genres`)
      let listGenre = data
      listGenre.unshift({
        id: '-1',
        name: 'Search'
      })
      setGenres(data)
    }

    getMovies()
    getGenres()
  },[]);

  return (
  <div>
    <div className="container">
      <nav >
        <Navbar/>
      </nav>
    </div>
    <Carousel movie={movie} dim={['900px', '400px']}/>
    <div>
      <Filters genres={genres}/>
    </div>
    <div>
      <h3>Novedades</h3>
      <Movies movie={movie} />
      <h5>Ver más..</h5>
    </div>
    <div>
      <h4>FOOTER</h4>
    </div>
  </div>
  );
}

export default Home;
