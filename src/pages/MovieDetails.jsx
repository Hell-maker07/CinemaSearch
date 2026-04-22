import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

function MovieDetails(){
    const {id} = useParams()
    console.log(id)
    const [movie,setMovie]=useState(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const fetchMovie = async()=>{
            const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=d2166e7a`)
            const data = await response.json()
            setMovie(data)
            setLoading(false)
        }
        fetchMovie()
    },[id])


    if(loading) return <p>Loading...</p>

    return (
        <div className="p-6 text-white">
            <div className="flex gap-6">
                <img className="w-64" src={movie.Poster}/>
                <div>
                    <h1 className="text-2xl font-bold">{movie.Title}</h1>
                    <p>{movie.Year}</p>
                    <p className="mt-4">{movie?.Plot}</p>
                </div>
            </div>
        </div>
    )
}
export default MovieDetails