import DanyaGeelyMK from "../../assets/geely.jpg";
import { NavLink, Outlet } from "react-router-dom";
import React, {useContext, useState} from "react";
import NavHistory from "../NavHistory.jsx";
import "../../main.css";
import { ThemeContext } from '../ThemeContext.jsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Button from "@mui/material/Button";
import { useFontSize} from "../Font.jsx";
import Modal from '@mui/material/Modal';
import { useFontFamily } from '../FontFamilyContext.jsx';
import { useAuthStatus } from '../../hooks/useAuthStatus';

function Navigation() {
    const { changeStyle, lightMode } = useContext(ThemeContext);
    const { increaseFontSize, decreaseFontSize } = useFontSize();
    const [open, setOpen] = useState(false);
    const { loggedIn } = useAuthStatus();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { fontFamily, changeFontFamily } = useFontFamily();

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
                            <NavLink to="/" exact={true} className="nav-link" activeClassName="active"
                                     aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link" activeClassName="active">Contacts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/gallery" className="nav-link" activeClassName="active">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/task" className="nav-link" activeClassName="active">Task</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {!loggedIn ? (
                            <>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/registration" className="nav-link"
                                             activeClassName="active">Register</NavLink>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <NavLink to="/logout" className="nav-link" activeClassName="active">Logout</NavLink>
                            </li>
                        )}
                    </ul>
                    <Button onClick={changeStyle}>
                        {lightMode ? <LightModeIcon/> : <DarkModeIcon/>}
                    </Button>
                    <Button onClick={handleOpen}>A</Button>
                    <Modal open={open} onClose={handleClose}
                           style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{backgroundColor: 'white', padding: '20px', width: '200px', textAlign: 'center'}}>
                            <h2>Change Font Size</h2>
                            <Button onClick={increaseFontSize} style={{ fontSize: '20px', margin: '10px' }}>+</Button>
                            <Button onClick={decreaseFontSize} style={{ fontSize: '20px', margin: '10px' }}>-</Button>
                            <h2>Change Font Family</h2>
                            <Button onClick={() => changeFontFamily('Arial')} style={{ margin: '10px' }}>Arial</Button>
                            <Button onClick={() => changeFontFamily('Times New Roman')} style={{ margin: '10px' }}>Times New Roman</Button>
                            <Button onClick={() => changeFontFamily('Courier New')} style={{ margin: '10px' }}>Courier New</Button>
                        </div>
                    </Modal>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <Outlet />
            <NavHistory />
        </nav>
    );
}

export default Navigation;
