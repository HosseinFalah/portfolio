import { CopyrightRounded, FavoriteRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const SidebarFooter = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: 100
            }}
        >
            <Typography 
                variant='subtitle2' 
                color="text.primary">
                    طراحی شده با 
                    <FavoriteRounded 
                        sx={{
                            verticalAlign: "middle", 
                            color: "tomato", 
                            height: 20
                        }}/>
            </Typography>
            <Typography variant='caption' color="text.primary" sx={{mt: 2}}>
                کپی رایت 1401 
                <CopyrightRounded sx={{verticalAlign: 'middle', height: 16}}/>
            </Typography>
        </Box>
    );
}
 
export default SidebarFooter;