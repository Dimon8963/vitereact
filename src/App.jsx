import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/blocks/Footer.jsx';
import Navigation from "./components/blocks/Navigation.jsx";
import Home from "./components/pages/Home.jsx";
import Contacts from "./components/pages/Contacts.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About.jsx";
import Services from "./components/pages/Services.jsx";
import PokeAPI from "./components/PokeAPI.jsx";
import TaskList from "./components/pages/Task.jsx";
import Login from "./components/Login.jsx";
import Registration from "./components/Registration.jsx";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute  from "./components/PublicRoute.jsx";
import Logout from "./components/Logout.jsx"
import Game from "./components/pages/Game.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                {/*<TestAPI />*/}
                <Routes>
                    <Route path="/" element={<Home />} /> {/*Головна сторінка*/}
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="gallery" element={<Gallery/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="services" element={<Services />} />
                    <Route path="task" element=
                        {
                            <PrivateRoute>
                                <TaskList/>
                            </PrivateRoute>
                        } />
                    <Route path="game" element=
                        {
                            <PrivateRoute>
                                <Game/>
                            </PrivateRoute>
                        } />
                    <Route path="pokeapi" element={<PokeAPI />} />
                    <Route path="/login" element=
                        {
                            <PublicRoute >
                                <Login />
                            </ PublicRoute >
                        } />
                    <Route path="/registration" element={
                        <PublicRoute >
                            <Registration />
                        </ PublicRoute >
                    } />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
