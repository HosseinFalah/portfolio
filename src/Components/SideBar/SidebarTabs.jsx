import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";

import { MainContext } from "../../Context/MainContext";
import { tabsData } from "../../Constants/tabsData";

const SidebarTabs = () => {
    const { pageNumber, pageNumberHandler, setDrawerOpen } = useContext(MainContext);
    const dataTab = tabsData();
    return (
        <Tabs 
            orientation='vertical' 
            variant='scrollable'
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={pageNumber}
            textColor={"primary"}
            onChange={pageNumberHandler}>
                {dataTab.map((tab) => (
                    <Tab 
                        key={uuidv4()}
                        label={tab.label}
                        icon={tab.icon} 
                        iconPosition="start"
                        sx={{
                            backgroundColor: grey[800],
                            color: "text.primary",
                            borderRadius: 2,
                            my: 0.5,
                            mx: 1,
                            "&.MuiTab-root": {
                                minHeight: 50,
                            },
                        }}
                        onClick={() => setDrawerOpen(false)}
                        {...tab}/>
                ))}
        </Tabs>
    );
}
 
export default SidebarTabs;