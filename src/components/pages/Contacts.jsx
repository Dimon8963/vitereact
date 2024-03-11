import React, {useContext} from "react";
import {ThemeContext} from "../ThemeContext.jsx";
import {useFontSize} from "../Font.jsx";

const Contacts = () => {
    const { lightMode } = useContext(ThemeContext);
    const { fontSize } = useFontSize();
    return (
        <div 
             style={{
                 backgroundColor: lightMode ? "white" : "black",
                 color: lightMode ? "black" : "white",
                 fontSize: `${fontSize}px`
             }}
        >
            <h2>Контакти</h2>
            <p>Тут буде інформація про контакти.</p>
        </div>
    );
}

export default Contacts;
