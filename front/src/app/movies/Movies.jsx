
'use client'
import Movie from "../movie/Movie";
import style from "./Movies.module.css";

const Movies = ({movie}) => {

    return (
        <div className={`container ${style.containerCarousel}`}>
            {
                movie.map(elem =><Movie key={elem.id} elem={elem}/>)
            }
        </div>
    )
}

export default Movies;