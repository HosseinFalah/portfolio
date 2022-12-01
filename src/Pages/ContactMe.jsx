import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import { LocalPhoneRounded, EmailRounded } from '@mui/icons-material';
import bgContactMe from '../Assets/images/bgContact-main.jpg';
import { grey, purple, yellow } from '@mui/material/colors';

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
            <Box sx={{ backgroundColor: 'rgba(0,0,0,.5)', height: 1, overflowY: 'scroll' }}>
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
                                        href='hosseinfalah2021@gmail.com' 
                                        color={'#f0f0f0'} 
                                        variant='body2' 
                                        sx={{ textDecoration: 'none' }}>
                                            hosseinfalah2021@gmail.com
                                    </Link>
                                </Box>
                            </Box>
                        </Grid2>
                    </Grid2>
                    <Box component={'form'} autoComplete={'off'} mt={3}>
                        <Grid2 container spacing={2}>
                            <Grid2 xs={12} sm={6}>
                                <TextField id="outlined-basic" label="نام خانوادگی" variant="outlined" fullWidth/>
                            </Grid2>
                            <Grid2 xs={12} sm={6}>
                                <TextField id="outlined-basic" label="نام" variant="outlined" fullWidth/>
                            </Grid2>
                            <Grid2 xs={12}>
                                <TextField id="outlined-basic" label="ایمیل" variant="outlined" fullWidth/>
                            </Grid2>
                            <Grid2 xs={12}>
                                <TextField id="outlined-basic" label="پیام شما" variant="outlined" fullWidth/>
                            </Grid2>
                            <Grid2 xs={12}>
                                <Button 
                                    variant='contained' 
                                    sx={{ 
                                        color: grey[100],
                                        backgroundColor: purple[500],
                                        '&:hover': {
                                            backgroundColor: purple[700],
                                        }
                                    }} 
                                    fullWidth>
                                        ارسال پیام
                                </Button>
                            </Grid2>
                        </Grid2>
                    </Box>
                    <Typography color={'#f0f0f0'} textAlign={'center'} my={4}>.تمامی حقوق مادی و معنوی این سایت متعلق به <Typography component={'span'} color={yellow[700]}>حسین فلاح</Typography> بوده و هرگونه کپی برداری از این سایت غیر اخلاقی می باشد</Typography>
                </Container>
            </Box>
        </Box>
    );
}

export default ContactMe