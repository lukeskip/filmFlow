// 'use client'

// import { useRouter } from "next/router";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Movies from "./movies/Movies";
// import Carousel from "./carousel/Carousel";
// import styles from "./page.module.css";

// const Landing = () => {
//   // const router = useRouter();
//   const URL = process.env.NEXT_PUBLIC_URL;
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const getMovies = async () => {
//       try {
//           // let { data } = await axios.get({URL})
//         const { data } = await axios.get('http://localhost:3001/movies');
//         setMovies(data);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };
//     getMovies();
//   }, []);

//   return (
//     <div className={styles.container}>
//       <div> 
//         <h1>FilmFlow</h1>
//       </div>

//       {/* SEARCHBAR */}
//       <div>
//         <h2>SearchBar</h2>
//       </div>

//       {/* USER INFO */}
//       <div>
//         <h2>UserInfo</h2>
//       </div>

//       {/* CAROUSEL */}
//       <div>
//         <Carousel movies={movies} />
//         <Link href="/form">
//           <button>Ir a Formulario</button>
//         </Link>
//       </div>

//       {/* FILTERS */}
//       <div>
//         <h3>Section filters</h3>
//       </div>

//       {/* COLLECTIONS */}
//       <div>
//         <Movies movies={movies} />
//       </div>
//     </div>
//   );
// };

// export default Landing;
