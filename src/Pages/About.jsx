import { v4 as uuidv4 } from 'uuid';

import { Box, Typography, Chip, Link, Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { JavascriptRounded, Info } from '@mui/icons-material';

import { DevInfo, Resume } from "../Components/Pages/index";

import profile from '../Assets/images/HosseinProfile.jpg';
import bgAbout from '../Assets/images/bgAbout-main.jpg';

import { aboutDev } from '../Constants/aboutDev';


import CustomAvatar from '../Components/Common/CustomAvatar';
import CustomDivider from '../Components/Common/CustomDivider';
import SocialMedia from '../Components/SocialMedia';

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
                    sx={{ py: 5, px: { xl: 0, lg: 0, md: 4, sm: 4, xs: 4 } }}
                >
                    <Grid2 xs={12} sm={12} md={4} lg={4} xl={4} >
                        <CustomAvatar
                            avatar={profile}
                            variant="circular"
                            border="20px solid rgba(0, 0, 0, 0.4)"
                            size={250}
                            fallback="HF"
                        />
                    </Grid2>
                    <Grid2 xs={12} sm={12} md={8} lg={8} xl={8} sx={{textAlign: 'end'}}>
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
                        {aboutDev.map(item => (
                            <DevInfo 
                            key={uuidv4()}
                            content={item.content}
                            icon={item.icon} 
                            />
                            ))}
                        {/* SocialMedia */}
                        <Box sx={{ mt: 3, gap: 2 }}>
                            <SocialMedia/>
                        </Box>
                    </Grid2>
                </Grid2>
                <Grid2 
                    container 
                    alignItems="center"
                    justifyContent='center'
                    sx={{ px: { xl: 0, lg: 0, md: 4, sm: 4, xs: 4 } }}
                >
                    <Grid2>
                        <CustomDivider
                            bColor="info.main"
                            color="info"
                            align="right"
                            icon={<Info/>}
                            text="درباره من"
                        />
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
                <Resume/>
            </Box>
        </Box>
    )
}

export default About