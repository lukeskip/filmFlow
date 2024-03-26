// Movie.js
import style from "./Movie.module.css"
import Link from "next/link";

const Movie = ({ elem, dim }) => {
    return (
        <Link href={`/detailMovie/${elem.id}`}>
            <div className={style.card}>
                <img 
                    src={elem.poster}
                    width={dim ? dim[0] : '200px'}
                    height={dim ? dim[1] : '300px'}
                    alt={elem.name}
                />
                <p>{elem.name}</p>
            </div>
        </Link>
    );
}

export default Movie;
