import { Avatar, Typography } from "@mui/material";

const SidebarHeader = () => {
    return (
        <>
            <Avatar
                src={require("../../Assets/images/HosseinProfile.jpg")}
                variant="rounded"
                sx={{height: 100, width: 100, margin: "0 auto", display: {
                    xl: "block",
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none"
                }}}
                >
                HF
            </Avatar>
            <Typography 
                variant='h6' 
                color={'whitesmoke'} 
                sx={{textAlign: "center"}}>
                حسین فلاح
            </Typography>
            <Typography 
                variant='caption' 
                color={'whitesmoke'} 
                sx={{textAlign: "center"}}>
                Junior Front End Developer
            </Typography>
        </>
    );
}
 
export default SidebarHeader;