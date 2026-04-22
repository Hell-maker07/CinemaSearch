import { useFavourites } from "../context/FavouritesContext";
import {Link} from "react-router-dom";


function  Navbar(){
    const {favourites} = useFavourites()
    return (
        <nav className="bg-gray-900 px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
            <h2 className="text-2xl font-bold text-yellow-400 tracking-wide">CinemaSearch</h2>
            <div className="flex gap-6 text-lg">
                <Link to="/" className="hover:text-yellow-400 transition">Search</Link>
                <Link to="/favourites" className="hover:text-yellow-400 transition">Favourites {favourites.length}</Link>
            </div>
            
        </nav>
    )
}
export default Navbar