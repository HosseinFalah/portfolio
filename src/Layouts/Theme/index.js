import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    direction: "rtl",
    palette: {
        mode: "dark",
        primary: {
            main: "#8be9fd",
        },
        secondary: {
            main: "#bd93f9",
        },
    },
    typography: {
        fontFamily: "IRANSansDN",
    }
})