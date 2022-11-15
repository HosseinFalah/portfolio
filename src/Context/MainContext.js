import { createContext, useState } from "react";

export const MainContext = createContext();

const ContextProvaider = ({children}) => {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const pageNumberHandler = (event, newPage) => setPageNumber(newPage);

    return (   
        <MainContext.Provider 
            value={{ pageNumber, setPageNumber, pageNumberHandler,
                    drawerOpen, setDrawerOpen}}
            >
            {children}
        </MainContext.Provider>
    )
}

export default ContextProvaider;