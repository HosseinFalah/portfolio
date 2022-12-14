import { v4 as uuidv4 } from 'uuid';

import { Box, Typography, Chip, Avatar, Tooltip, IconButton, Link, Divider, Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { JavascriptRounded, Info } from '@mui/icons-material';

import DevInfo from "./Components/DevInfo";
import Resume from './Components/Resume';

import profile from '../Assets/images/HosseinProfile.jpg';
import bgAbout from '../Assets/images/bgAbout-main.jpg';

import { aboutDev, socialMediaInfo } from '../Constants/aboutDev';

const About = () => {
    return (
        <Box component="main" sx={{
            backgroundImage: `url(${bgAbout})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: 1,
            height: 1
        }}>
            <Box component="div" sx={{ backgroundColor: 'rgba(0,0,0,.7)', height: 1, overflowY: 'scroll'}}>
                <Grid2 
                    container
                    maxWidth='lg'
                    alignItems="center"
                    justifyContent='center'
                    sx={{ 
                        py: 5,
                        px: {
                            xl: 0,
                            lg: 0,
                            md: 4,
                            sm: 4,
                            xs: 4
                        }
                    }}
                >
                    <Grid2
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        xl={4}
                    >
                        <Avatar
                            src={profile}
                            variant="circular"
                            sx={{
                                height: 250,
                                width: 250,
                                border: '20px solid rgba(0, 0, 0, 0.4)',
                                margin: 'auto',
                                display: {
                                    xl: 'block',
                                    lg: 'block',
                                    md: 'block',
                                    sm: 'block',
                                    xs: 'block'
                                }
                            }}
                        >
                        </Avatar>
                    </Grid2>
                    <Grid2
                        xs={12}
                        sm={12}
                        md={8}
                        lg={8}
                        xl={8}
                        sx={{textAlign: 'end'}}
                    >
                        <Chip
                            variant="outlined"
                            color="warning"
                            icon={<JavascriptRounded sx={{ fontSize: 35 }}/>}
                            label={
                                <Typography variant="body1">
                                    ???????????? ???????? ?? ?????????? ?????????? ??????????????????????
                                </Typography>
                            } sx={{ p:3, textAlign: 'right', mb: 2 }}>
                        </Chip>

                        {/* Info Developer */}
                        {aboutDev.map(item => (
                            <DevInfo 
                                key={uuidv4()}
                                content={item.content}
                                icon={item.icon} 
                            />
                        ))}
                        <Box sx={{ mt: 3, gap: 2 }}>
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
                        </Box>
                    </Grid2>
                </Grid2>
                <Grid2 
                    container 
                    alignItems="center"
                    justifyContent='center'
                        sx={{
                            px: {
                                xl: 0,
                                lg: 0,
                                md: 4,
                                sm: 4,
                                xs: 4
                            }
                        }
                    }
                >
                    <Grid2>
                        <Divider textAlign="right">
                            <Chip
                                variant="outlined"
                                color="info"
                                icon={<Info/>}
                                label={
                                    <Typography variant="body1">
                                        ???????????? ????
                                    </Typography>
                                } sx={{ p:3}}>
                            </Chip>
                        </Divider>
                        <Box sx={{ backgroundColor: '#1a1a1ab3', p: 5, my: 4, borderRadius: 3, textAlign: 'left' }}>
                            <Typography variant="body1" color="#fff">???????? ???????? ???????? ???????????? ???????? ?? ?????????? ?????????? ?????????????????????? ???????? ?????????? ???????? ?????????????????????? ?? ???????? ???????? ??????</Typography>
                            <Typography variant="body2" color="#fff" sx={{ mt: 2 }}>?????????? 1382 ???????? ?????????????? ???????? ???? ?????? 1400 ???? ???????? ?????????? ???????? ???? ?????????? ???????????? ?????????? ???? ???????????? ?????? ???? ???????? ???????? ?? ???? ???????? ???????? ???? ???? ?????????? ???????? ?????????????????????? ???????????? ?????????? </Typography>
                            <Typography variant="body2" color="#fff" sx={{ mt: 2 }}>???? ?????? ???????? ?? ?????????? ?????? ???? ????????????????</Typography>
                            <Link 
                                href="/Assets/Pdf/CvHosseinalah.pdf" 
                                download 
                                sx={{ textDecoration: 'none' }}
                            >
                                <Button variant="outlined" color="error" sx={{ mt: 2 }}>???????????? ?????????? ????</Button>
                            </Link>
                        </Box>
                    </Grid2>
                </Grid2>
                <Resume/>
            </Box>
        </Box>
    )
}

export default About