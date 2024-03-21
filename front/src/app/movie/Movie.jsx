import style from "./Movie.module.css"

const Movie = ({elem}) => {
    return(
        <div key={elem.id} className={style.card} >
            <img 
                src='https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png'
                width="100%"
                height="auto"
            />
            <p>Name: {elem.title}</p>
        </div>
    )
}

export default Movie;