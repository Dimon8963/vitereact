import {createContext, useContext, useState} from 'react';

export const FontFamilyContext = createContext();

export const FontFamilyProvider = ({ children }) => {
    const [fontFamily, setFontFamily] = useState('Arial');

    const changeFontFamily = (newFontFamily) => {
        setFontFamily(newFontFamily);
    };

    return (
        <FontFamilyContext.Provider value={{ fontFamily, changeFontFamily }}>
            {children}
        </FontFamilyContext.Provider>
    );
};

export const useFontFamily = () => {
    const context = useContext(FontFamilyContext);
    if (!context) {
        throw new Error('useFontFamily must be used within a FontFamilyProvider');
    }
    return context;
};