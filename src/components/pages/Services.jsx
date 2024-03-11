import React, {useContext} from "react";
import {ThemeContext} from "../ThemeContext.jsx";
import {useFontSize} from "../Font.jsx";
import {useFontFamily} from "../FontFamilyContext.jsx";

const Services = () => {
    const { lightMode } = useContext(ThemeContext);
    const { fontSize } = useFontSize();
    const { fontFamily } = useFontFamily();

    return (
        <div
            style={{
                backgroundColor: lightMode ? "white" : "black",
                color: lightMode ? "black" : "white",
                fontSize: `${fontSize}px`,
                fontFamily: fontFamily
            }}
        >
            <h2>Наші послуги</h2>
            <p>Ми пропонуємо широкий спектр послуг для наших клієнтів:</p>
            <ul>
                <li>Веб-розробка</li>
                <li>Мобільний додаток розробки</li>
                <li>UI/UX дизайн</li>
                <li>Цифровий маркетинг</li>
                <li>SEO оптимізація</li>
                <li>Хостинг та інфраструктура</li>
            </ul>
            <p>Будь ласка, зв'яжіться з нами, щоб дізнатися більше про наші послуги та обговорити ваші потреби.</p>
        </div>
    );
}

export default Services;
