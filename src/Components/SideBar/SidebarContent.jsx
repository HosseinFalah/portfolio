import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";

import { SidebarFooter, SidebarHeader, SidebarTabs } from "./index";

const SidebarContent = () => {
    return (
        <Box sx={{
            justifyContent: "center", 
            textAlign: "center",
            mt: 2,
            overflowY: {
                md: "hidden",
            }
        }}>
            {/* SideBar Header */}
            <SidebarHeader/>

            <Divider variant='middle' color={grey[900]} sx={{mt: 2}}/>
            {/* SideBar Tabs */}
            <SidebarTabs/>

            <Divider variant='middle' color={grey[900]} sx={{mt: 2}}/>

            {/* SideBar Footer */}
            <SidebarFooter/>
        </Box>
    )
}

export default SidebarContent;