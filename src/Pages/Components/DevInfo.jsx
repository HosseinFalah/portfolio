import { Typography } from "@mui/material";

const DevInfo = ({content, icon, sizeIcon = "body2"}) => {
    return (
        <Typography 
            variant={sizeIcon} 
            color="#fff" 
            textAlign="left"
            sx={{ mt: 2 }}>
                {content}
                {icon}
        </Typography>
    )
}

export default DevInfo