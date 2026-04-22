import { useFavourites } from "../context/FavouritesContext";
import { Link } from "react-router-dom";

function MovieCard({movie}){
     const {isFavourite,addFavourite,removeFavourite}=useFavourites()
     const alreadyFavourited = isFavourite(movie.imdbID)
     const handleFavourites=()=>{
        if(alreadyFavourited){
            removeFavourite(movie.imdbID)
        }else{
            addFavourite(movie)
        }
     }
     return(
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer">
            {movie.Poster!=="N/A"?(
                <Link to={`/movie/${movie.imdbID}`}>
                    <img src={movie.Poster} alt={movie.Title} className="w-full h-72 object-contain bg-black"/>
                </Link>
                 
            ):(
                <div className="w-full h-64 bg-gray-600 flex items-center justify-center text-gray-400">
                    No Poster
                </div>
            )}

            <div className="p-3">
                <p className="font-semibold text-sm line-clamp-2">{movie.Title}</p>
                <p className="text-gray-400 text-xs">{movie.Year}</p>
                <button onClick={handleFavourites} className="mt-2 text-xl hover:scale-125 transition">{alreadyFavourited?"❤️":"🤍"}</button>
            </div>

        </div>
     )
}

export default MovieCard