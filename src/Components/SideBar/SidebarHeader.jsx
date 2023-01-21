import { Typography } from "@mui/material";

import avatar from "../../Assets/images/HosseinProfile.jpg";
import CustomAvatar from "../Common/CustomAvatar";

const SidebarHeader = () => {
    return (
        <>
            <CustomAvatar
                avatar={avatar}
                variant="rounded"
                border={null}
                size={150}
                fallback="HF"
            />
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
                Front End Developer
            </Typography>
        </>
    );
}
 
export default SidebarHeader;