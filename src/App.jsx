import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import Navigation from "./components/Navigation.jsx";
function App() {
    return (
        <>
            <Navigation/>
            <MainContent/>
            <Footer/>
        </>
    );
}

export default App;