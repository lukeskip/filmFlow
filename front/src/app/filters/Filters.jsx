'use client'
import Movie from "../movie/Movie";
import Link from "next/link";

const Filters = ({genres}) => {
    return (
        <div className="container">
            {
                genres.map(elem =>
                <Link 
                    href={`/filters/${elem.name}`}
                    key={elem.id}>                                     
                        <Movie elem={elem}/>
                </Link>)
            }
        </div>
    )
}

export default Filters;