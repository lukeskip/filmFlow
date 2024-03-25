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
      let { data } = await axios.get(`${URL}movies`)
      setMovie(data)
    }
    getMovies()
  },[]);

  return (
    <div className="container">
      <div>
        <h1>Landing</h1>
          <Carousel movie={movie} dim={['600px', '400px']}/>
          <button onClick={()=>router.push('/home')}>Ingresar</button>
      </div>
      <div>
        <p>Reemplazar esta linea por COMP LOGIN</p>
      </div>
    </div>
    )
}

  export default Landing;