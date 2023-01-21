
import { v4 as uuidv4 } from 'uuid';
import { IconButton, Link, Tooltip } from '@mui/material';
import { socialMediaInfo } from '../Constants/aboutDev';

const SocialMedia = () => {
    return (
        <>
            {socialMediaInfo.map(item => (
                <Link href={item.mediaLink} key={uuidv4()}>
                    <Tooltip title={item.mediaTitle}>
                            <IconButton sx={{
                                mr: 2,
                                transition: 'all 0.5s ease',
                                '&:hover': {
                                    backgroundColor: "#fff",
                                    color: item.mediaColor
                                }
                            }}>
                                {item.mediaIcon}
                            </IconButton>
                    </Tooltip>
                </Link>
            ))}
        </>
    )
}

export default SocialMedia