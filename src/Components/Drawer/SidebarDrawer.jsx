import { Drawer } from "@mui/material";
import { useContext } from "react";

import { SidebarContent } from "../SideBar";
import { MainContext } from "../../Context/MainContext";

const SidebarDrawer = () => {
    const { drawerOpen, setDrawerOpen } = useContext(MainContext);

    return (
        <Drawer
            open={drawerOpen}
            variant="temporary"
            onClose={() => setDrawerOpen(false)}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 300
                },
                display: {
                    sx: "block",
                    sm: "block",
                    md: "none",
                    lg: "none"
                }
            }}
        >
            <SidebarContent/>
        </Drawer>
    );
}
 
export default SidebarDrawer;