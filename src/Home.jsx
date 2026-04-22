import { useContext } from "react"
import ThemeContext from "./context/themeContext"
function Home() {
    const {isDark}=useContext(ThemeContext)
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my app!
        Current theme: {isDark ? "Dark" : "Light"}
      </p>
    </div>
  )
}
export default Home