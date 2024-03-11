import React, {useContext} from "react";
import {ThemeContext} from "../ThemeContext.jsx";
import {useFontSize} from "../Font.jsx";
import {useFontFamily} from "../FontFamilyContext.jsx";
import "../../main.css"; // Підключаємо CSS файл

const About = () => {
    const { lightMode } = useContext(ThemeContext);
    const { fontSize } = useFontSize();
    const { fontFamily } = useFontFamily();
    return (
        <div
            className="developer-info"
            style={{
                backgroundColor: lightMode ? "white" : "black",
                color: lightMode ? "black" : "white",
                fontSize: `${fontSize}px`,
                fontFamily: fontFamily
            }}
        >
            <p>Цей сайт був розроблений в межах навчання.</p>
            <p>Викладач: Сурков К.Ю.</p>
            <p>Студент-розробник сайта: Приймак Дмитро</p>
        </div>
    );
}

export default About;
