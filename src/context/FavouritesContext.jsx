import { useContext,useState,createContext,useMemo} from "react";

const FavouriteContext = createContext()

export function FavouritesProvider({children}){
    const [favourites,setFavourites]=useState([])


    const addFavourite = (movie)=>{
        setFavourites(p=>[...p,movie]) // if done without =>(function) it may become stale
    }

    const removeFavourite = (imdbID)=>{
        setFavourites(p=> p.filter(m=>m.imdbID !==imdbID))
    }

    const isFavourite = (imdbID)=>{
        return favourites.some(p=> p.imdbID === imdbID)
    }

    const value = useMemo(()=>({
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite
    }),[favourites])


    return (
        <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
    )
}

export function useFavourites(){
    return useContext(FavouriteContext)
}
