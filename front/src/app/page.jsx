'use client'
import { useRouter } from "next/navigation";
import axios from "axios";
import Movies from "./movies/Movies";
import Carousel from "./carousel/Carousel";
import { useState, useEffect } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';

const Landing = () => {

  const {error, isLoading, user} = useUser()
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_URL
  const [movie, setMovie] = useState(
    [{
      id: 'cargando',
      title: 'cargando'
    }]
  )

  function home(){
    if(user){
      router.push('/home')
    }
  }

  useEffect(() => {
    const getMovies = async() => {
      let { data } = await axios.get(`${URL}movies`)
      setMovie(data)
    }
    getMovies()
  },[]);

  home()

  if(error){
    return (
      <div>Error</div>
    )
  }

  if(isLoading){
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="container">
      <div>
        <h1>Landing</h1>
          <Carousel movie={movie} dim={['600px', '400px']}/>
          <button onClick={()=>router.push('/home')}>Ingresar</button>
      </div>
      <div>
        <p>Reemplazar esta linea por COMP LOGIN</p>
        {!user ? <a href="/api/auth/login"><button>Login</button></a> : ""}
        
      </div>
    </div>
    )
}

  export default Landing;