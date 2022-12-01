
import { Box, Typography, Chip, Avatar, Tooltip, IconButton, Link, Divider, Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { 
    PersonRounded, 
    EmailRounded, 
    LocationOnRounded, 
    PhoneRounded,
    JavascriptRounded, 
    GitHub, 
    LinkedIn, 
    WhatsApp, 
    Instagram, 
    Telegram, Info } from '@mui/icons-material';

import DevInfo from "./Components/DevInfo";

import profile from '../Assets/images/HosseinProfile.jpg';
import bgAbout from '../Assets/images/bgAbout-main.jpg';

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
                    sx={{ py: 5}}
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
                                    برنامه نویس و توسعه دهنده جاوااسکریپت
                                </Typography>
                            } sx={{ p:3, textAlign: 'right', mb: 2 }}>
                        </Chip>

                        {/* Info Developer */}
                        <DevInfo 
                            content={"حسین فلاح"}
                            sizeIcon="h5"
                            icon={<PersonRounded 
                            sx={{ 
                                verticalAlign: 'bottom', 
                                color: 'grey.main', 
                                mr: 1 
                            }} />} />
                        <DevInfo 
                            content={"hosseinfalah2021@gmail.com"} 
                            icon={<EmailRounded 
                            sx={{ 
                                verticalAlign: 'bottom', 
                                color : 'grey.main',
                                mr: 1 
                            }}/>}/>
                        <DevInfo 
                            content={"09922477517"} 
                            icon={<PhoneRounded 
                            sx={{ 
                                verticalAlign: 'bottom', 
                                color : 'grey.main',
                                mr: 1 
                            }}/>}/>
                        <DevInfo 
                            content={"ایران ,خوزستان ,اندیمشک"}
                            icon={<LocationOnRounded
                            sx={{
                                verticalAlign: 'bottom',
                                color: 'grey.main',
                                mr: 1
                            }}/>}/>
                        <Box sx={{ mt: 3, gap: 2 }}>
                            <Link href="https://t.me/HosseinProgramer">
                                <Tooltip title="تلگرام من">
                                        <IconButton sx={{
                                            mr: 2,
                                            transition: 'all 0.5s ease',
                                            '&:hover': {
                                                backgroundColor: "#fff",
                                                color: '#0215e3'
                                            }
                                        }}>
                                            <Telegram/>
                                        </IconButton>
                                </Tooltip>
                            </Link>
                            <Link href="https://www.instagram.com/hossein____falah/">
                                <Tooltip title="اینستاگرام من">
                                    <IconButton sx={{
                                        mr: 2,
                                        transition: 'all 0.5s ease',
                                        '&:hover': {
                                            backgroundColor: "#fff",
                                            color: '#ff0303'
                                        }
                                    }}>
                                        <Instagram/>
                                    </IconButton>
                                </Tooltip>
                            </Link>
                            <Link href="https://api.whatsapp.com/send?phone=989922477517">
                                <Tooltip title="واتساپ من">
                                    <IconButton sx={{
                                        mr: 2,
                                        transition: 'all 0.5s ease',
                                        '&:hover': {
                                            backgroundColor: "#fff",
                                            color: '#0bce57'
                                        }
                                    }}>
                                        <WhatsApp/>
                                    </IconButton>
                                </Tooltip>
                            </Link>
                            <Link href="https://www.linkedin.com/in/hossein-falah-5024a4227/">
                                <Tooltip title="لینکداین من">
                                    <IconButton sx={{
                                        mr: 2,
                                        transition: 'all 0.5s ease',
                                        '&:hover': {
                                            backgroundColor: "#fff",
                                            color: '#0352ff'
                                        }
                                    }}>
                                        <LinkedIn/>
                                    </IconButton>
                                </Tooltip>
                            </Link>
                            <Link href="https://github.com/HosseinFalah">
                                <Tooltip title="گیت هاب من">
                                    <IconButton sx={{
                                        mr: 2,
                                        transition: 'all 0.5s ease',
                                        '&:hover': {
                                            backgroundColor: "#fff",
                                            color: '#000'
                                        }
                                    }}>
                                        <GitHub/>
                                    </IconButton>
                                </Tooltip>
                            </Link>
                            <Link href="tel:+989922477517">
                                <Tooltip title="شماره تماس">
                                    <IconButton sx={{
                                        mr: 2,
                                        transition: 'all 0.5s ease',
                                        '&:hover': {
                                            backgroundColor: "#fff",
                                            color: '#0bce57'
                                        }
                                    }}>
                                        <PhoneRounded/>
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </Box>
                    </Grid2>
                </Grid2>
                <Grid2 
                        container 
                        alignItems="center"
                        justifyContent='center'
                    >
                        <Grid2>
                            <Divider textAlign="right">
                                <Chip
                                    variant="outlined"
                                    color="info"
                                    icon={<Info/>}
                                    label={
                                        <Typography variant="body1">
                                            درباره من
                                        </Typography>
                                    } sx={{ p:3}}>
                                </Chip>
                            </Divider>
                            <Box sx={{ backgroundColor: '#1a1a1ab3', p: 5, my: 4, borderRadius: 3, textAlign: 'left' }}>
                                <Typography variant="body1" color="#fff">حسین فلاح هستم برنامه نویس و توسعه دهنده جاوااسکریپت عاشق دنیای جذاب جاوااسکریپت و کتاب خونه هاش</Typography>
                                <Typography variant="body2" color="#fff" sx={{ mt: 2 }}>متولد 1382 ساکن اندیمشک هستم از سال 1400 به دلیل علاقه زیاد در زمینه برنامه نویسی وب فعالیت خود را آغاز کردم و به صورت حرفه ای در دنیای جذاب جاوااسکریپت فعالیت میکنم </Typography>
                                <Typography variant="body2" color="#fff" sx={{ mt: 2 }}>به شدت تشنه و علاقه مند به یادگیریم</Typography>
                                <Link 
                                    href="/Assets/Pdf/CvHosseinalah.pdf" 
                                    download 
                                    sx={{ textDecoration: 'none' }}
                                >
                                    <Button variant="outlined" color="error" sx={{ mt: 2 }}>دانلود رزومه من</Button>
                                </Link>
                            </Box>
                        </Grid2>
                </Grid2>
            </Box>
        </Box>
    )
}

export default About