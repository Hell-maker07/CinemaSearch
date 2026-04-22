// import ProfileCard from "./ProfileCard";
// import { useState } from "react";

// import { useRef } from "react"

// import { useState } from "react"

// import { useState } from "react"

// function App(){
//   let name="Saubhagya"
//   let city="Gwalior"
//   const year=2026;
//   return (
//     <div>
//       <h1>Hello,I'm {name==="Saubhagya" ? "SS":name}</h1>
//       <p>I'm from {city}</p>
//       <p>I'm Learning JS in {year}</p>
//       <p>Next Year Will Be {year+1}</p>
//       <h1>My App</h1>
//       <ProfileCard name="Saubhagya" city="Gwalior"location="Bengaluru" address={{city:"Gwalior"}} hobbies={["coding","loving"]} age={18} isStudent={true}/>
//       <ProfileCard name="Sakshi" city="Rayadurg"location="Bengaluru" address={{city:"Anantapur"}} hobbies={["Research","Dancing"]} age={20} isStudent={true}/>
//     </div>
//   )
// }

// function App(){
//   const [count,setCount]=useState(0);
//   const [name,setName]=useState("Stranger");
//   return(
//     <div>
      
//       <h2>Hello, {name}</h2>
//       <button onClick={()=> setName("Saubhagya")}>Reveal Name</button>
//       <h1>Count:{count}</h1>
//       <button onClick={()=> setCount(count+1)}>Increase</button>
//       <br/>
//       <button onClick={()=> setCount(count-1)}>Decrease</button>
//       <br/>
//       <button onClick={()=> setCount(0)}>Reset</button>
//     </div>
//   )
// }




// import { useState } from "react";
// function App(){
//   const [count,setCount]=useState(0);
//   let Sentence=""
//     if(count===0){
//       Sentence="Empty"
//     }else if(count>=1 && count<=5){
//       Sentence="Getting there..."
//     }else if(count>=6 && count<=9){
//       Sentence="Almost full!"
//     }else{
//       Sentence="Full!"
//     }

//     if(count>10){
//       setCount(10)
//     }else if(count<0){
//       setCount(0)
//     }
//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={()=> setCount(count+1)}><h4>Increase</h4></button>
//       <button onClick={()=> setCount(count-1)}><h4>Decrease</h4></button>
//       <button onClick={()=> setCount(0)}><h4>Reset</h4></button>

//       {/* or {Better Way(Using Ternary Operator)}
//       <button onClick={()=> setCount(count>=10? 10 : count+1)}>Increase</button>
//       <button onClick={()=> setCount(count<=0? 0 : count-1)}>Increase</button>
//       <button onClick={()=> setCount(0)}><h4>Reset</h4></button>
//       */}
//       <br/>
//       <h2>{Sentence}</h2>
//     </div>
//   )
// }


// import {useState, useEffect} from "react"
// function App(){
//   useEffect(()=>{
//     console.log("Component Just Received!")
//   })
//   return <h1>Hello</h1>
// }
// export default App



// // No dependency array — runs after EVERY render
// useEffect(() => {
//   console.log("runs every render")
// })

// // Empty array — runs ONCE when component first mounts
// useEffect(() => {
//   console.log("runs only once")
// }, [])

// // With a value — runs when that value changes
// useEffect(() => {
//   console.log("count changed!")
// }, [count])








// import {useState, useEffect} from "react"
// function App(){
//   const [joke,setJoke] = useState(null)
//   const [isLoading,setIsLoading]=useState(false)

//   const fetchJoke = async () => {
//       setIsLoading(true)
//       await new Promise(resolve => setTimeout(resolve, 2000))
//       const response = await fetch("https://official-joke-api.appspot.com/random_joke")
//       const data = await response.json()
//       setJoke(data)
//       setIsLoading(false)
//   }

//   useEffect(()=>{
//     fetchJoke();
//   },[])
//   return (
//     <div>
//       <h1>Random Joke</h1>
//       {isLoading?(<p>Fetching Joke...</p>):
//       (<div>
//         <p>{joke?.setup}</p>
//         <p>{joke?.punchline}</p>
//       </div>)}

//       <button onClick={fetchJoke}>New Joke</button>
//     </div>
//   )
// }
// export default App


// import { useState } from "react"
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [isAdmin, setIsAdmin] = useState(false)

//   // if/else for entire component output
//   if (!isLoggedIn) {
//     return (
//       <div>
//         <h1>Please login</h1>
//         <button onClick={() => setIsLoggedIn(true)}>Login</button>
//       </div>
//     )
//   }

//   return (
//     <div>
//       {/* ternary — show one or the other */}
//       <h1>{isAdmin ? "Welcome, Admin!" : "Welcome, User!"}</h1>

//       {/* && — show or nothing */}
//       {isAdmin && <button>Delete All Users</button>}

//       <button onClick={() => setIsLoggedIn(false)}>Logout</button>
//     </div>
//   )
// }
// export default App





// import { useState } from "react";
// function App(){
//   const [isLoggedIn,setIsLoggedIn]=useState(false);
//   const [isAdmin,setIsAdmin]=useState(false)

//   if(!isLoggedIn){
//     return (
//       <div>
//         <h1>Please Login</h1>
//         <button onClick={()=>{setIsLoggedIn(true) 
//                               setIsAdmin(false)}}>Login As User</button>
//         <button onClick={()=>{setIsLoggedIn(true) 
//                               setIsAdmin(true)}}>Login As Admin</button>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <h1>Welcome! Saubhagya</h1>

//       {isAdmin && <p>You Have Admin Access</p>}
//       <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
//     </div>
//   )
// }

// export default App






// function App(){
//   const users=["Saubhagya","Sakshi"]
//   return (
//     <div>
//       {users.map((user,index)=>(
//         <p key={index}>{user}</p> /* using index (not ideal) 
//         <p key={user.id}>user.name</p> (ideal)
//         */
//       ))}
//     </div>
//   )
// }
// export default App



// function App() {
//   const users = [
//     { id: 1, name: "Saubhagya", city: "Gwalior", age: 18 },
//     { id: 2, name: "Sakshi", city: "Anantapur", age: 20 },
//     { id: 3, name: "Ritika", city: "Delhi", age: 22 },
//     { id: 4, name: "Rahul", city: "Chennai", age: 19 }
//   ]
//   return(
//     <div>
//       {users.map(user=>(
//         <div key={user.id}>
//           <h3>{user.name}</h3>
//           <p>City: {user.city}</p>
//           <p>Age: {user.age}</p>
//         </div>
//       ))}
//     </div>
//   )
// }


// export default App




// import { useState } from "react"
// function App(){
//   const [filter,setfilter]=useState("none")
//   const products = [
//   { id: 1, name: "Laptop", price: 55000, inStock: true },
//   { id: 2, name: "Phone", price: 25000, inStock: false },
//   { id: 3, name: "Headphones", price: 3000, inStock: true },
//   { id: 4, name: "Tablet", price: 35000, inStock: false },
//   { id: 5, name: "Watch", price: 8000, inStock: true },
// ]
  
//   let displayedProducts=[]
//   if(filter==="all") displayedProducts=products
//   if(filter==="instock") displayedProducts=products.filter(p=>p.inStock)


//   return (
//     <div>
//       {filter==="none" && (<h2>Welcome What Do You Want To See</h2>)}


//       <button onClick={()=>setfilter("all")}>Show All</button>
//       <button onClick={()=>setfilter("instock")}>In Stock Only</button>

      

//       {displayedProducts.map(product=> (
//         <div key={product.id}>
//           <p>Name: {product.name}</p>
//           <p>Price: ₹{product.price}</p>
//           <p style = {{color:product.inStock?"green":"red"}}>{product.inStock?"In Stock":"Out Of Stock"}</p>
          
//         </div>
//       ))}
//     </div>
//   )
// }

// export default App






// import { useState } from "react"

// function App(){
//   const [name,setName]=useState("")
//   const [email,setEmail]=useState("")
//   const [submitted,setSubmitted]=useState(false)

//   const handleSubmit = ()=>{
//     if(name===""||email===""){
//       alert("Please Fill All The Fields")
//       return 
//     }
//     setSubmitted(true)
//   }

//   if(submitted){
//     return(
//       <div>
//         <h2>Form Submitted!</h2>
//         <p>Name : {name}</p>
//         <p>Email : {email}</p>
//         <button onClick={()=>setSubmitted(false)}>Go Back</button>
//       </div>
//     )
//   }

//   return(
//     <div>
//       <h1>Sign Up</h1>
//       <input 
//       type="text"
//       value= {name}
//       onChange={(e)=>setName(e.target.value)}
//       placeholder="Enter Name"
//       />
//       <br/>

//       <input 
//       type="email"
//       value={email}
//       onChange={(e)=>setEmail(e.target.value)}
//       placeholder="Enter Email"
//       />

//       <button onClick={handleSubmit}>Submit</button>

//     </div>
//   )

// }
// export default App




// import { useState } from "react";
// function App(){
//   const [name,setName]=useState("")
//   const [email,setEmail]=useState("")
//   const [age,setAge]=useState(0)
//   const [city,setCity]=useState("")
//   const [submitted,setSubmitted]=useState(false)

//   const handleSubmit = ()=>{
//     if (name===""||email===""||city===""){
//       alert("All Fields Are Required To Be Filled")
//       return
//     }else if(age<=0){
//       alert("Age Must Be Greater Than 0")
//       return
//     }
//     setSubmitted(true)
//   }

//   if(submitted){
//     return (
//       <div>
//         <h2>Summary</h2>
//         <p>Name : {name}</p>
//         <p>Email : {email}</p>
//         <p>Age : {age}</p>
//         <p>City : {city}</p>
//         <br/>
//         <button onClick={()=>setSubmitted(false)}>Edit</button>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <h1>Registration Form</h1>
//       Name: <input 
//       type="text"
//       value={name}
//       onChange={(e)=>setName(e.target.value)}
//       placeholder="Enter Name"
//       />
//       <br/>
//       <br/>
//       Email: <input 
//       type="email"
//       value={email}
//       onChange={(e)=>setEmail(e.target.value)}
//       placeholder="Enter Email"
//       />
//       <br/>
//       <br/>
//       Age: <input 
//       type="number"
//       value={age}
//       onChange={(e)=>setAge(Number(e.target.value))}
//       placeholder="Enter Age"
//       />
//       <br/>
//       <br/>
//       City: <input 
//       type="text"
//       value={city}
//       onChange={(e)=>setCity(e.target.value)}
//       placeholder="Enter City"
//       />
//       <br/>
//       <br/>

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )

// }
// export default App



// import { useState } from "react";

// function ProductCard({product,onAddToCart}){
//   return (
//     <div>
//       <p>{product.name}</p>
//       <p>{product.price}</p>
//       <button onClick={()=>onAddToCart(product)}>Add To Cart</button>
//     </div>
//   )
// }

//   function Cart({cartItems}){
//     return (
//       <div>
//         <h2>Cart ({cartItems.length} items)</h2>
//         {cartItems.map(i=> (<p key={i.id}>{i.name} - {i.price}</p>))}
//       </div>
//     )
//   }


// function App(){
//   const [cartItems,setCartItems]=useState([])

//   const addToCart=(product)=>{
//     setCartItems([...cartItems,product])
//   }

//   const products = [
//     { id: 1, name: "Laptop", price: 55000 },
//     { id: 2, name: "Phone", price: 25000 },
//     { id: 3, name: "Watch", price: 8000 },
//   ]

//   return (
//     <div>
//       <h1>Shop</h1>
//       {products.map(product=>(<ProductCard key={product.id} product={product} onAddToCart={addToCart} />))}
//       <Cart cartItems={cartItems}/>
//     </div>
//   )
// }
// export default App


// import { useState } from "react";

// function TemperatureInput({celsius,setCelsius}){
//   return (
//     <div>
//       <input 
//       type="number"
//       value={celsius}
//       onChange={(e)=>setCelsius(e.target.value)}
//       placeholder="Enter Temp"
//       />
//     </div>
//   )
// }

// function TemperatureDisplay({celsius}){
//   const fahrenheit = celsius===""?"": (celsius * 9/5) + 32
//   return <p>Fahrenheit Temp: {fahrenheit}</p>
// }


// function App(){
//   const [celsius,setCelsius]=useState("")
//   return (
//     <div>
//       <h1>Temp Convertor</h1>
//       <TemperatureInput
//       celsius={celsius}
//       setCelsius={setCelsius}/>
//       <br/>
//       <TemperatureDisplay
//       celsius={celsius}/>
      
//     </div>
//   )
// }
// export default App


// import {Routes, Route, Link} from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Profile from "./Profile"
// function App(){
//     return(
//     <div>
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/profile">Profile</Link>
//         </nav>

//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path="/profile" element={<Profile/>}/>
//         </Routes>
//     </div>
//     )

// }

// export default App

// import useCounter from "./hooks/useCounter";
// function App(){
//     const {count,increment,decrement,reset}=useCounter(0)
//     return(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={increment}>Increase</button>
//             <button onClick={decrement}>Decrease</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
// }

// import { useState } from "react"
// import ThemeContext from "./context/themeContext"
// import Navbar from "./Navbar"
// import Home from "./Home"
// import Profile from "./Profile";

// function App(){
//     const [isDark,setIsDark]=useState(false);
    
//     return (
//         <ThemeContext.Provider value={{isDark,setIsDark}}>
//             <div style={{
//                 backgroundColor: isDark ? "#222" : "#fff",
//                 color: isDark ? "#fff" : "#222",
//                 minHeight: "100vh"
//             }}>
//                 <Navbar/>
//                 <Home/>
//                 <Profile/>
//             </div>
//         </ThemeContext.Provider>
//     )
// }
// export default App


// import {useRef} from "react"
// function App() {
//     const inputref = useRef(null)

//     const focusInput = ()=>{
//         inputref.current.focus()
//     }

//     const clearInput = ()=>{
//         inputref.current.value=""
//     }

//   return (
//     <div>
//       <input ref={inputref} type="text" placeholder="Type something" />
//       <button onClick={focusInput}>Focus Input</button>
//       <button onClick={clearInput}>Clear Input</button>
//     </div>
//   )
// }

// export default App

// import { useState, useRef } from "react"

// function App() {
//   const [count, setCount] = useState(0)
//   const renderCount = useRef(0)

//   renderCount.current = renderCount.current + 1

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <p>Component rendered {renderCount.current} times</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   )
// }

// export default App



// import {useState, useRef} from "react"

// function App(){
//     const [time,setTime]=useState(0)
//     const intervalRef=useRef(null)

//     const start=()=>{
//         if (intervalRef.current) return
//         intervalRef.current=setInterval(()=>{
//             setTime(t=>t+1)
//         },1000)
//     }

//     const stop=()=>{
//         clearInterval(intervalRef.current)
//     }

//     const reset = () =>{
//         clearInterval(intervalRef.current)
//         setTime(0)
//     }

//     return (
//         <div>
//             <h1>{time} Seconds</h1>
//             <button onClick={start}>Start</button>
//             <button onClick={stop}>Stop</button>
//             <button onClick={reset}>Reset</button>

//         </div>
//     )
// }

// export default App



// import { useState, useMemo } from "react"

// // fake slow function — simulates heavy calculation
// const slowFunction = (num) => {
//   console.log("calculating...")
//   for (let i = 0; i < 1000000000; i++) {} // billion iterations
//   return num * 2
// }

// function App() {
//   const [count, setCount] = useState(0)
//   const [text, setText] = useState("")

//   // try with and without useMemo — feel the difference
//   const result = useMemo(() => slowFunction(count), [count])

//   return (
//     <div>
//       <input
//         value={text}
//         onChange={e => setText(e.target.value)}
//         placeholder="Type here"
//       />
//       <button onClick={() => setCount(count + 1)}>Count: {count}</button>
//       <p>Result: {result}</p>
//     </div>
//   )
// }

// export default App

// import { useMemo,useState } from "react";
// function App(){

//     const products = [
//   { id: 1, name: "Laptop", price: 55000 },
//   { id: 2, name: "Phone", price: 25000 },
//   { id: 3, name: "Headphones", price: 3000 },
//   { id: 4, name: "Tablet", price: 35000 },
//   { id: 5, name: "Watch", price: 8000 },]

//     const [search,setSearch]=useState("")
//     const [count,setCount]=useState(0)

//     const filteredProducts = useMemo(()=> {
//         console.log("filtering...")
//         return products.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()))

//     },[search])

//     return(
//         <div>
//             <h1 className="text-3xl font-bold text-blue-500">Hello</h1>
//             <input 
//             value={search}
//             onChange={(e)=>setSearch(e.target.value)}
//             placeholder="Search"/>

//             <button onClick={()=>setCount(count+1)}>Count: {count}</button>

//             {filteredProducts.map(p=>(
//                 <div key={p.id}>{p.name} - ₹{p.price}</div>
//             ))}
//         </div>
//     )
// }

// export default App

































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




