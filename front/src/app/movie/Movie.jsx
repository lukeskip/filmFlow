import style from "./Movie.module.css"

const Movie = ({ elem }) => {
    return(
        <div key={elem.id} className={style.card} >
            <img 
                src={elem.poster}
                width="200px"
                height="auto"
            />
            <p>{elem.name}</p>
        </div>
    )
}

export default Movie;