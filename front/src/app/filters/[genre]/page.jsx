'use client'
import Navbar from "../../navbar/Navbar"
import axios from 'axios'
import { useState, useEffect } from 'react'
import Movies from '@/app/movies/Movies'

const Filter = ({ params }) => {
    const URL = process.env.NEXT_PUBLIC_URL
    let URL2 = URL
    params.genre !== "Search" 
        ? URL2 = URL2 + `movies?search=&genres=${params.genre}`
        : URL2 = URL + `movies?`
    const [urlFilter, setUrlFilter] = useState([URL2])
    const [movies, setMovies] = useState(
        [{
            id: 'cargando',
            name: 'cargando'
        }]
    )
    const [genres, setGenres] = useState(
        [{
            id: 'cargando',
            name: 'cargando'
        }]
    )
    const [dataFilter, setDataFilter] = useState({
        search: "",
        genre: "",
        orderType: "",
        order: "" 
    })
    
    useEffect(() => {
        const getGenres = async() => {
            let { data } = await axios.get(`${URL}genres`)
            setGenres(data)
        }
        getGenres()
    },[]);
    useEffect(() => {
        const getMovies = async() => {
            let { data } = await axios.get(urlFilter)
            if(data !== "No hay Peliculas") return setMovies(data)
            setMovies([{id: 0, name: "Not Found"}])
        }
        getMovies()
    },[urlFilter]);

    const handleChange = (event) => {
        if (event.target.name === 'search') {
            setDataFilter({ ...dataFilter, search: event.target.value });
        } else if (event.target.name === 'genre') {
            setDataFilter({ ...dataFilter, genre: event.target.value });
        } else if (event.target.name === 'orderType') {
            setDataFilter({ ...dataFilter, orderType: event.target.value });
        } else if (event.target.name === 'order') {
            setDataFilter({ ...dataFilter, order: event.target.value });
        }
    }

    const applyFilter = () => {
        URL2 = URL + `movies?search=${dataFilter.search}`
        if(dataFilter.genre !== '') URL2 = URL2 + `&genre=${dataFilter.genre}`
        if(dataFilter.orderType !== '') URL2 = URL2 + `&orderType=${dataFilter.orderType}`
        if(dataFilter.order !== '') URL2 = URL2 + `&order=${dataFilter.order}`
        setUrlFilter(URL2)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        applyFilter()
    }

    return(
        <div>
            <Navbar />
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label>Frase:</label>
                            <input
                                type='text'
                                name='search'
                                value={dataFilter.search}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Genre:</label>
                            <select name='genre' value={dataFilter.genre} onChange={handleChange}>
                                <option value={''} >Seleccione...</option>
                                {genres.map(elem => (
                                    <option key={elem.id} value={elem.name}>{elem.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>OrderType:</label>
                            <select name='orderType' value={dataFilter.orderType} onChange={handleChange}>
                                <option value={''} >Seleccione...</option>
                                <option value={'name'} >Name</option>
                                <option value={'duration'} >Duration</option>
                            </select>
                        </div>
                        <div>
                            <label>Order:</label>
                            <select name='order' value={dataFilter.order} onChange={handleChange}>
                                <option value={''} >Seleccione...</option>
                                <option value={'asc'} >Ascendente</option>
                                <option value={'desc'} >Descendente</option>
                            </select>

                        </div>
                        <div>
                            <input
                                type='Submit'
                                value="Aplicar"
                                onChange={handleChange}
                                onClick={()=>applyFilter()}
                            />
                        </div>
                    </fieldset>
                </form>
            </div>
            <div>
                <h3>Filtrar</h3>
                <Movies movie={movies} />
            </div>
        </div>
    )
}

export default Filter;