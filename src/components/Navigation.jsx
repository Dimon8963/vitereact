import DanyaGeelyMK from "../assets/geely.jpg";
import { Link, Outlet } from "react-router-dom"; // Додали імпорт компонента Link
import React from "react";
import NavHistory from "./NavHistory.jsx";

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={DanyaGeelyMK} alt="Logo" width="30" height="24" className="me-2"/> My Website
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active"
                                  aria-current="page">Home</Link> {/* Додано посилання для "Home" */}
                        </li>
                        <li className="nav-item">
                            <Link to="/about"
                                  className="nav-link">About</Link> {/* Додано посилання для "About" */}
                        </li>
                        <li className="nav-item">
                            <Link to="/services"
                                  className="nav-link">Services</Link> {/* Додано посилання для "Services" */}
                        </li>
                        <li className="nav-item">
                            <Link to="/contacts"
                                  className="nav-link">Contacts</Link> {/* Додано посилання для "Contacts" */}
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery"
                                  className="nav-link">Gallery</Link> {/* Додано посилання для "Gallery" */}
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <Outlet /> {/* Додали Outlet для відображення вмісту між посиланнями */}
            <NavHistory /> {/* Додали компонент NavHistory */}
        </nav>
    );
}

export default Navigation;
