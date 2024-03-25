
'use client'
import Movie from "../movie/Movie";
import style from "./Movies.module.css";
import Link from "next/link";
import { useState } from "react";

const Movies = ({movie}) => {

    const [elemIndex, setElemIndex] = useState({
        bottom: 0,
        top:  4
    });

    const changeMovie = (direct) => {
        if(direct === 'prev'){
            if(elemIndex.bottom > 0){
                setElemIndex({
                    ...elemIndex, 
                    bottom: elemIndex.bottom -1,
                    top: elemIndex.top -1
                })
                return
            }
        }
        else{
            if(elemIndex.top < movie.length - 1){
                setElemIndex({
                    ...elemIndex, 
                    bottom: elemIndex.bottom +1,
                    top: elemIndex.top +1
                })
                return
            }
        }
    }

    return (
        <div className={`container ${style.bg}`}>
            {
            movie.map((elem, index) => {
                if(index >= elemIndex.bottom && index <= elemIndex.top){
                    return (<Link 
                        className={style.circle}
                        href={`/`}
                        key={elem.id}>                                     
                            <Movie elem={elem}/>
                    </Link>)
                }})
            }
            <div className={style.leftArrow} onClick={() => changeMovie('prev')}>&#10092;</div>
            <div className={style.rightArrow} onClick={() => changeMovie('next')}>&#10093;</div>
        </div>


    )
}

export default Movies;