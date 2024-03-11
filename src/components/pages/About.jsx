import React, {useContext} from "react";
import {ThemeContext} from "../ThemeContext.jsx";
import {useFontSize} from "../Font.jsx";
import "../../main.css"; // Підключаємо CSS файл

const About = () => {
    const { lightMode } = useContext(ThemeContext);
    const { fontSize } = useFontSize();
    return (
        <div
            className="developer-info"
            style={{
                backgroundColor: lightMode ? "white" : "black",
                color: lightMode ? "black" : "white",
                fontSize: `${fontSize}px`
            }}
        >
            <p>Цей сайт був розроблений в межах навчання.</p>
            <p>Викладач: Сурков К.Ю.</p>
            <p>Студент-розробник сайта: Приймак Дмитро</p>
        </div>
    );
}

export default About;
