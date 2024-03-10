import React, {useContext} from "react";
import {ThemeContext} from "../ThemeContext.jsx";

const Contacts = () => {
    const { lightMode } = useContext(ThemeContext);
    return (
        <div 
             style={{
                 backgroundColor: lightMode ? "white" : "black",
                 color: lightMode ? "black" : "white"
             }}
        >
            <h2>Контакти</h2>
            <p>Тут буде інформація про контакти.</p>
        </div>
    );
}

export default Contacts;
