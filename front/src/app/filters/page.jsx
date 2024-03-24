'use client'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Movies from '@/app/movies/Movies'
import { useRouter } from 'next/navigation'

const FiltersView = () => {
    const router = useRouter()
    const params = router.params
    console.log(params);
    let URL = process.env.NEXT_PUBLIC_URL
    const [urlFilter, setUrlFilter] = useState([`${URL}movies`])
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
        const getMovies = async() => {
            try {
                let { data } = await axios.get(urlFilter)
                console.log(data);
                //if(data.original.name === "error") return alert("Falló la solicitud")
                if(data !== "No hay Peliculas") return setMovies(data)
                setMovies([{id: 0, name: "Not Found"}])  
            }catch (e) {
                console.log(e.message);
            }
        }
        getMovies()
    },[urlFilter]);

    useEffect(() => {
        const getGenres = async() => {
            try{
                let { data } = await axios.get(`${URL}genres`)
                setGenres(data);
            }catch (e) {
                console.log(e.message);
            }
        }
        getGenres()
    }, [])

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
        let path = URL
        path = path + `movies?search=${dataFilter.search}`
        if(dataFilter.genre !== '') path = path + `&genre=${dataFilter.genre}`
        if(dataFilter.orderType !== '') path = path + `&orderType=${dataFilter.orderType}`
        if(dataFilter.order !== '') path = path + `&order=${dataFilter.order}`
        setUrlFilter(path)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        applyFilter()
    }

    return(
        <div>
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
                                <option value={'Name'} >Name</option>
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

export default FiltersView;