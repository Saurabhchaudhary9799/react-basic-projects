import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { IoIosSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("light");
  const handleClick = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <button className="theme-changer" onClick={handleClick}>
          {theme === "light" ? (
            <IoIosSunny className="icon" />
          ) : (
            <BsMoonStarsFill className="icon" />
          )}
        </button>
        <p className="text">This is a theme changer button of the website</p>
      </div>
    </>
  );
}

export default App;
