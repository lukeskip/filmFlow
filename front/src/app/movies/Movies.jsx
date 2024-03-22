
'use client'
import Movie from "../movie/Movie";
import style from "./Movies.module.css";
import Link from "next/link";

const Movies = ({movie}) => {

    return (
        <div className="container">
            {
                movie.map(elem =><Link href="/" key={elem.id}><Movie elem={elem}/></Link>)
            }
        </div>
    )
}

export default Movies;