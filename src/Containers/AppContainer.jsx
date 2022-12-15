import { useContext, useEffect } from "react";

import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MainLayout from "../Layouts/MainLayout";
import SwipeableViews from "react-swipeable-views";
import { Sidebar } from "../Components/SideBar";
import SidebarContainer from "./SidebarContainer";
import PagesContainer from "./PagesContainer";
import { DrawerActionButton } from "../Components/Drawer";
import { MainContext } from "../Context/MainContext";
import { Home, About, Skills, ContactMe, Projects } from "../Pages/index";
import Page from "../Pages/Page";

const AppContainer = () => {

    const { pageNumber, pageNumberHandler, setDrawerOpen } = useContext(MainContext);

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        if (isMdUp) {
            setDrawerOpen(false);
        }
    }, [isMdUp]);

    return (
        <MainLayout>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>
            <DrawerActionButton/>
            <PagesContainer>
                <SwipeableViews
                    index={pageNumber}
                    onChangeIndex={pageNumberHandler}>
                    <Page index={0}>
                        {/* Home Page */}
                        <Home/>
                    </Page>
                    <Page index={1}>
                        {/* About Page */}
                        <About/>
                    </Page>
                    <Page index={2}>
                        {/* Skills Page */}
                        <Skills/>
                    </Page>
                    <Page index={3}>
                        {/* Projects Page */}
                        <Projects/>
                    </Page>
                    <Page index={4}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>نظرات مشتریان</Typography>
                    </Page>
                    <Page index={5}>
                        {/* Contact Me Page*/}
                        <ContactMe/>
                    </Page>
                </SwipeableViews>
            </PagesContainer>
        </MainLayout>
    )
}

export default AppContainer;