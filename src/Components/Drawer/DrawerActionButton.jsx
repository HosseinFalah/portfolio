import { MenuRounded } from '@mui/icons-material'
import { Box, Fab } from "@mui/material";
import { red, orange } from "@mui/material/colors";
import { useContext } from 'react';

import { MainContext } from "../../Context/MainContext";

const DrawerActionButton = () => {
    const { setDrawerOpen } = useContext(MainContext);
    return (
        <Box
            sx={{
                position: "absolute",
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none"
                }
            }}
        >
            <Fab 
                aria-label="Sidebar" 
                size='small' 
                sx={{ m: 2, color: red[600], backgroundColor: orange[300] }}
                onClick={() => setDrawerOpen(true)}>
                <MenuRounded/>
            </Fab>
        </Box>
    )
}

export default DrawerActionButton