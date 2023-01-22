import { Box, Container, Link, Typography } from '@mui/material';
import { LocalPhoneRounded, EmailRounded } from '@mui/icons-material';
import { yellow } from '@mui/material/colors';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import bgContactMe from '../Assets/images/bgContact-main.jpg';
import { ContactForm } from '../Components/Pages';

const ContactMe = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${bgContactMe})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: 1,
            height: 1
        }}>
            <Box sx={{ backgroundColor: 'rgba(0,0,0,.6)', height: 1, overflowY: 'scroll' }}>
                <Container maxWidth="md">
                    <Typography variant="h4" color="#f0f0f0" sx={{textAlign: "center", my: 4}}>ارتباط با من</Typography>
                    <Typography variant="body2" color="#f0f0f0" sx={{textAlign: "center"}}>جهت درخواست انجام پروژه میتوانید با من در تماس باشید</Typography>
                    
                    <Grid2 container mt={2} spacing={2} textAlign={'center'}>
                        <Grid2 xs={12} sm={6} md={6}>
                            <Box py={4} bgcolor={"#202026"} color={'#f0f0f0'} borderRadius={3}>
                                <LocalPhoneRounded sx={{ 
                                    width: '10%',
                                    height: '10%', 
                                    border: '1px solid',
                                    borderRadius: '50%',
                                    borderColor: '#0bceaf',
                                    p: 4
                                }}/>
                                <Box>
                                    <Typography my={3} fontSize={22}>تلفن</Typography>
                                    <Link 
                                        href='tel:+989922477517' 
                                        color={'#f0f0f0'} 
                                        variant='body2' 
                                        sx={{ textDecoration: 'none' }}>
                                            09922477517
                                    </Link>
                                </Box>
                            </Box>
                        </Grid2>
                        <Grid2 xs={12} sm={6} md={6}>
                            <Box py={4} bgcolor={"#202026"} color={'#f0f0f0'} borderRadius={3}>
                                <EmailRounded sx={{ 
                                    width: '10%',
                                    height: '10%', 
                                    border: '1px solid',
                                    borderRadius: '50%',
                                    borderColor: '#0bceaf',
                                    p: 4
                                }}/>
                                <Box>
                                    <Typography my={3} fontSize={22}>ایمیل</Typography>
                                    <Link 
                                        href='mailto:hosseinfalah2021@gmail.com' 
                                        color={'#f0f0f0'} 
                                        variant='body2' 
                                        sx={{ textDecoration: 'none' }}>
                                            hosseinfalah2021@gmail.com
                                    </Link>
                                </Box>
                            </Box>
                        </Grid2>
                    </Grid2>
                    {/* Contact Form */}
                    <ContactForm/>
                    <Typography color={'#f0f0f0'} textAlign={'center'} my={4}>.تمامی حقوق مادی و معنوی این سایت متعلق به <Typography component={'span'} color={yellow[700]}>حسین فلاح</Typography> بوده و هرگونه کپی برداری از این سایت غیر اخلاقی می باشد</Typography>
                </Container>
            </Box>
        </Box>
    );
}

export default ContactMe