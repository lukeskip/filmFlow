'use client'
import Movie from "../movie/Movie";
import Link from "next/link";
import style from "./Filters.module.css"
import { useState } from "react";

const FiltersView = ({genres}) => {
    
    const [elemIndex, setElemIndex] = useState({
        bottom: 0,
        top:  6
    });

    const changeMovie = (direct) => {
        if(direct === 'prev'){
            if(elemIndex.bottom > 0){
                setElemIndex({
                    ...elemIndex, 
                    bottom: elemIndex.bottom -2,
                    top: elemIndex.top -2
                })
                return
            }
        }
        else{
            if(elemIndex.top < genres.length - 2){
                setElemIndex({
                    ...elemIndex, 
                    bottom: elemIndex.bottom +2,
                    top: elemIndex.top +2
                })
                return
            }
        }
    }

    return (
        <div className={`container ${style.bg}`}>
            {
                genres.map((elem, index) => {
                    if(index >= elemIndex.bottom && index <= elemIndex.top){
                        return (<Link 
                            className={style.circle}
                            href={`/filters/${elem.name}`}
                            key={elem.id}>                                     
                                <Movie elem={elem} dim={['0px', '0px']}/>
                        </Link>)
                }})
            }
            <div className={style.leftArrow} onClick={() => changeMovie('prev')}>&#10092;</div>
            <div className={style.rightArrow} onClick={() => changeMovie('next')}>&#10093;</div>
        </div>
    )
}

export default FiltersView;