import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const FontSizeContext = createContext();

export const useFontSize = () => useContext(FontSizeContext);

export const FontSizeProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(16);

    const increaseFontSize = () => setFontSize(prevSize => prevSize + 1);
    const decreaseFontSize = () => setFontSize(prevSize => prevSize - 1);

    return (
        <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize }}>
            {children}
        </FontSizeContext.Provider>
    );
};

FontSizeProvider.propTypes = {
    children: PropTypes.node.isRequired
};
