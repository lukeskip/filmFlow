import style from "./Movie.module.scss"
import Buy from '../btnBuy/buy'

const Movie = ({ elem, dim }) => {
    return(
        <div key={elem.id} className={style.card} >
            <img 
                src={elem.poster}
                width={dim ? dim[0] : '200px'}
                height={dim ? dim[1] : '300px'}
            />

            <p className={style.order}>{elem.name}</p>
            <Buy movie = {elem}></Buy>

        </div>
    )
}

export default Movie;