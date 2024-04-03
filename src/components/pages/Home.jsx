import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../fb-cfg.js';
import { onAuthStateChanged } from 'firebase/auth';
import Welcome from "../Welcome.jsx";
import Field from "../Field.jsx";
import List from "../List.jsx";
import "../../main.css"
import { ThemeContext } from "../ThemeContext.jsx";
import { useFontSize } from "../Font.jsx";
import { useFontFamily } from "../FontFamilyContext.jsx";

const Home = () => {
    const { lightMode } = useContext(ThemeContext);
    const { fontSize } = useFontSize();
    const { fontFamily } = useFontFamily();
    const [user, setUser] = useState(null);
    const heartClicks = useSelector(state => state.heartClicks); // Отримання кількості натискань на серце зі стору

    useEffect(() => {
        // Очистити підписку, коли компонент знищується
        return onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
    }, []);

    return (
        <div className={"container"}
             style={{
                 backgroundColor: lightMode ? "white" : "black",
                 color: lightMode ? "black" : "white",
                 fontSize: `${fontSize}px`,
                 fontFamily: fontFamily
             }}
        >
            <Welcome name={"Користувач"} lastname={
                user ? user.displayName + " " + user.email : "Анонім"}
            />
            <img width={120} height={120} src={user ? user.photoURL : "https://via.placeholder.com/120"} alt="user" />
            <Field label={"Введіть текст"} placeholder={"..."} />
            <a href="/pokeapi" className="pokeapi-button">PokeAPI</a>
            <p>Кількість натискань на сердечко: {heartClicks}</p> {/* Відображення кількості натискань на серце */}
            <List />
            {/*<MainContent/>*/}

        </div>
    )
}

export default Home;
