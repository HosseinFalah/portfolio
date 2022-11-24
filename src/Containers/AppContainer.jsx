import { useContext } from "react";

import { Typography } from "@mui/material";
import MainLayout from "../Layouts/MainLayout";
import SwipeableViews from "react-swipeable-views";
import { Sidebar } from "../Components/SideBar";
import SidebarContainer from "./SidebarContainer";
import PagesContainer from "./PagesContainer";
import { DrawerActionButton } from "../Components/Drawer";
import { MainContext } from "../Context/MainContext";
import { Home, About, Skills } from "../Pages/index";
import Page from "../Pages/Page";

const AppContainer = () => {

    const { pageNumber, pageNumberHandler } = useContext(MainContext);

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
                        <Typography variant="h5" sx={{textAlign: "center"}}>نمونه کار ها</Typography>
                    </Page>
                    <Page index={4}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>نظرات مشتریان</Typography>
                    </Page>
                    <Page index={5}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>ارتباط با من</Typography>
                    </Page>
                </SwipeableViews>
            </PagesContainer>
        </MainLayout>
    )
}

export default AppContainer;