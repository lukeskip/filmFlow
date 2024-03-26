import style from "./Movie.module.scss"

const Movie = ({ elem, dim }) => {
    return(
        <div key={elem.id} className={style.card} >
            <img 
                src={elem.poster}
                width={dim ? dim[0] : '200px'}
                height={dim ? dim[1] : '300px'}
            />
            <p>{elem.name}</p>
        </div>
    )
}

export default Movie;