import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import Navigation from "./components/Navigation.jsx";
import Welcome from './components/Welcome.jsx'
import Field from './components/Field.jsx';

function App() {

    return (
        <>
            <Navigation/>

            <Welcome name={"Dima"} lastname={"Pryimak"}/>
            <Field label={"Введіть текст"} placeholder={"..."}/>

            <MainContent/>

            <Footer/>
        </>
    )
}

export default App;