import { Typography, Chip, Divider } from '@mui/material';

const CustomDivider = ({ bColor, color, icon, align, text }) => {
    return (
        <>
            <Divider textAlign={align} 
                sx={{
                    "&::before, &::after": { 
                        borderColor: bColor 
                    }
                }}
            >
                <Chip 
                    variant='outlined'
                    icon={icon} 
                    color={color} 
                    label={
                        <Typography 
                            variant='body1' 
                            sx={{ textAlign: "center" }}
                        >
                            {text}
                        </Typography>
                    } sx={{ p: 3}} >
                </Chip>
            </Divider>
        </>
    )
}

export default CustomDivider