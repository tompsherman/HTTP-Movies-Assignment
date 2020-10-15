import React, { useState, useEffect} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'


const initialValues = {
    name: "",
    director: "",
    metascore: "",
    stars: ""
}

const UpdateMovie = (props) => {
    const {id} = useParams()
    const [movie, setMovie] = useState(initialValues)
    
    useEffect(() => {
        axios.get(`http://localhost:9999/api/movies/${id}`)
        .then(response => setMovie(response.data))
        .catch(err => console.log(err))
    }, [id])

    const changeHandler = (event) => {
        setMovie({...movie, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {

    }
    return (
        <div>
            <h2>update movie</h2>
            <form onSubmit={submitHandler}>
                <input
                    name='title'
                    type='text'
                    value={movie.title}
                    onChange={changeHandler}
                    placeholder='enter name'
                />
                <input
                    name='director'
                    type='text'
                    value={movie.director}
                    onChange={changeHandler}
                    placeholder='enter director'
                />
                <input
                    name='metascore'
                    type='text'
                    value={movie.metascore}
                    onChange={changeHandler}
                    placeholder='enter metascore'
                />
                <input
                    name='stars'
                    type='text'
                    value={movie.stars}
                    onChange={changeHandler}
                    placeholder='enter stars'
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default UpdateMovie
