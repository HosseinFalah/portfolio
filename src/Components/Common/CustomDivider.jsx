import { Typography, Chip, Divider } from '@mui/material';

const CustomDivider = ({ color, icon, align, text }) => {
    return (
        <>
            <Divider textAlign={align}>
                <Chip
                    variant="outlined"
                    color={color}
                    icon={icon}
                    label={
                        <Typography variant="body1">
                            {text}
                        </Typography>
                    } sx={{ p:3}}>
                </Chip>
            </Divider>
        </>
    )
}

export default CustomDivider