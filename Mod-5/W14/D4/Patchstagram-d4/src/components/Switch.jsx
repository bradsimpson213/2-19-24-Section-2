import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
// import { useContext } from 'react'
import { useThemeContext } from "../context/ThemeContext"; 
import './Switch.css';


export default function Switch() {
    const { theme, setTheme } = useThemeContext()

    return (
        <>
            <input
                className="react-switch-checkbox"
                id="theme-switch"
                type="checkbox" 
                onChange={ () => setTheme(prevState => prevState === "dark" ? "light" : "dark")}
            />
            <label
                className="react-switch-label"
                htmlFor="theme-switch"
            >
                <span className={`react-switch-button`} >
                    { theme === 'dark' ? <MdDarkMode style={{ color: "black"}}/> : <MdLightMode/> }
                    {/* the dark icon needs a color of black because without it, it inherits the white from the button, and you can't see it*/}
                </span>
            </label>
        </>
    )
}


// This component was build using Switch reading external resource
// https://upmostly.com/tutorials/build-a-react-switch-toggle-component
