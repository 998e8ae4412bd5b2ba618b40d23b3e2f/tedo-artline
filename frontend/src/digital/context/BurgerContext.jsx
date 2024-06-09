import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const BurgerContext = createContext();

function BurgerProvider({ children }) {
    const [isOpenBurger, setIsOpenBurger] = useState(false);
    const [isInitialMount, setIsInitialMount] = useState("false");


    function toggleBurger() {
        setIsOpenBurger(prev => !prev);
        setIsInitialMount("true")
    }

    return (
        <BurgerContext.Provider value={{ isOpenBurger, toggleBurger,isInitialMount }}>
            {children}
        </BurgerContext.Provider>
    );
}

function useBurger() {
    const context = useContext(BurgerContext);
    if (context === undefined) {
        throw new Error("BurgerContext was used outside of BurgerProvider");
    }
    return context;
}

BurgerProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { BurgerProvider, useBurger };
