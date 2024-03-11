import React, {useContext} from "react";
import Welcome from "../Welcome.jsx";
import Field from "../Field.jsx";
import List from "../List.jsx";
import "../../main.css"
import {ThemeContext} from "../ThemeContext.jsx";
import {useFontSize} from "../Font.jsx";



const Home = () => {
    const { lightMode } = useContext(ThemeContext);
    const { fontSize } = useFontSize();
    return (
        <div className={"container"}
             style={{
                 backgroundColor: lightMode ? "white" : "black",
                 color: lightMode ? "black" : "white",
                 fontSize: `${fontSize}px`
             }}
        >
            <Welcome name={"Dima"} lastname={"Pryimak"}/>
            <Field label={"Введіть текст"} placeholder={"..."}/>
            <a href="/pokeapi" className="pokeapi-button">PokeAPI</a>
            <List/>
            {/*<MainContent/>*/}

        </div>
    )
}

export default Home;