import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ThemeProvider } from './components/ThemeContext.jsx'
import { FontSizeProvider} from "./components/Font.jsx";
import {FontFamilyProvider} from "./components/FontFamilyContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FontSizeProvider>
            <FontFamilyProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </FontFamilyProvider>
        </FontSizeProvider>
    </React.StrictMode>,
)