import { useContext } from "react";
import ThemeContext from "./context/themeContext";

function Profile() {
    const {isDark}=useContext(ThemeContext)
  return (
    <div>
      <h1>Profile Page</h1>
      <p>This is your profile.
        Current theme: {isDark ? "Dark" : "Light"}
      </p>
    </div>
  )
}
export default Profile