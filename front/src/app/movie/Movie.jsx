import style from "./Movie.module.css"

const Movie = ({ elem, dim }) => {
    return(
        <div key={elem.id} className={style.card} >
            <img 
                src={elem.poster}
                width={dim ? dim[0] : '200px'}
                height={dim ? dim[1] : '300px'}
            />
            <p className={style.order}>{elem.name}</p>
        </div>
    )
}

export default Movie;