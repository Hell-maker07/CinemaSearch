

// Movie Search App Project (CinemaSearch)

import {Routes,Route} from "react-router-dom";
import { FavouritesProvider } from "./context/FavouritesContext";
import Navbar from "./components/Navbar";
import Search from "./pages/Search"
import Favourites from "./pages/Favourites"
import AnimatedBackground from "./components/BackgroundComponent";
import MovieDetails from "./pages/MovieDetails";



function App(){
    return (
        <FavouritesProvider>
            <div className="min-h-screen text-white relative overflow-hidden">
                <AnimatedBackground />
                <div className="relative z-10">
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Search/>}/>
                        <Route path="/favourites" element={<Favourites/>}/>
                        <Route path="/movie/:id" element={<MovieDetails/>}/>


                    </Routes>
                </div>
            </div>
        </FavouritesProvider>
    )
}
export default App




