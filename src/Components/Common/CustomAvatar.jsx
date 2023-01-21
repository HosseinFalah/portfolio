import { Avatar } from "@mui/material";

const CustomAvatar = ({ avatar, size, variant, border, fallback }) => {
    return (
        <>
            <Avatar
                src={`${avatar}`}
                variant={variant}
                sx={{
                    height: size, 
                    width: size, 
                    margin: "auto",
                    border: border,
                    display: {
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none"
                    }
                }}>
                {fallback}
            </Avatar>
        </>
    )
}

export default CustomAvatar