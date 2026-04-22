import { useFavourites } from "../context/FavouritesContext";
import MovieCard from "../components/MovieCard";

function Favourites(){
    const {favourites} = useFavourites();
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-yellow-400">Your Favourites</h1>
            {favourites.length===0?(<p className="text-gray-400 text-center mt-10">No favourite movies yet</p>
            ):(<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {favourites.map(movie => (
                        <MovieCard key={movie.imdbID} movie={movie}/>))}
                </div>
            )}
        </div>
    );
}
export default Favourites;









// import { useFavourites } from "../context/FavouritesContext";
// import MovieCard from "../components/MovieCard";
// function Favourites(){
//     const {Favourites}=useFavourites()
//     return (
//         <div>
//             <h1>Your Favourites</h1>
//             {favourites.length===0?(<p>No favourite movies yet</p>):(
//                 <div>
//                     {favourites.map(movie =>{
//                         <MovieCard key={movie.imdbID} movie={movie}/>
//                     })}
//                 </div>
//             )}
//         </div>
//     )
// }