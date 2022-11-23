import { Box } from "@mui/material";
import { useContext } from "react";

import { MainContext } from "../Context/MainContext";

const Page = ({children, index, ...others}) => {
    const { pageNumber } = useContext(MainContext);
    return (
        <Box
            role="tabpanel"
            hidden={pageNumber !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`sidebar-tab-${index}`}
            {...others}>
            {pageNumber === index && (
                <Box sx={{ height: "100vh", overflow: "hidden" }}>{children}</Box>
            )}
        </Box>
    );
}

export default Page;