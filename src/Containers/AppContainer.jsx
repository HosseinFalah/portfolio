import { useContext } from "react";

import { Typography, Box } from "@mui/material";
import MainLayout from "../Layouts/MainLayout";
import SwipeableViews from "react-swipeable-views";
import { Sidebar } from "../Components/SideBar";
import SidebarContainer from "./SidebarContainer";
import PagesContainer from "./PagesContainer";
import Page from "../Pages/Page";
import { DrawerActionButton } from "../Components/Drawer";
import { MainContext } from "../Context/MainContext";

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
                        <Box sx={{
                            backgroundImage: `url(${require("../Assets/images/bgHome-min.jpg")})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "100vh",
                        }}>
                            <Typography variant="h5" sx={{textAlign: "center", color: "#fff"}}>صفحه اصلی</Typography>
                        </Box>
                    </Page>
                    <Page index={1}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>درباره ما</Typography>
                    </Page>
                    <Page index={2}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>رزومه من</Typography>
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