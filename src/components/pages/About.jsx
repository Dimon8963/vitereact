import React, {useContext} from "react";
import {ThemeContext} from "../ThemeContext.jsx";
import "../../main.css"; // Підключаємо CSS файл

const About = () => {
    const { lightMode } = useContext(ThemeContext);
    return (
        <div
            className="developer-info"
            style={{
                backgroundColor: lightMode ? "white" : "black",
                color: lightMode ? "black" : "white"
            }}
        >
            <p>Цей сайт був розроблений в межах навчання.</p>
            <p>Викладач: Сурков К.Ю.</p>
            <p>Студент-розробник сайта: Приймак Дмитро</p>
        </div>
    );
}

export default About;
