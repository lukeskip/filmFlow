'use client'
import axios from "axios";
import Movies from "../../components/movies/Movies";
import Carousel from "../../components/carousel/Carousel";
import Navbar from "../../components/navbar/Navbar"
import { useState, useEffect } from "react";
import Filters from "../filters/Filters";
import { useUser } from '@auth0/nextjs-auth0/client';

const Home = () => {
  const {error, isLoading, user} = useUser()
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

      {/* TITLE */}
      <div> 
        <h1>FilmFlow</h1>
      </div>
      {/* SEARCHBAR */}
      <div>
        <h2>SearchBar</h2>
      </div>
      <div>
        {!user ? <a href="/api/auth/login"><button>Login</button></a> : <h2>{user.nickname}</h2>}
      </div>

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
