import { useFormik } from "formik";

import { Box, Button, Container, InputAdornment, Link, TextField, Typography } from '@mui/material';
import { LocalPhoneRounded, EmailRounded, Face6Rounded, SubjectRounded } from '@mui/icons-material';
import { grey, purple, yellow } from '@mui/material/colors';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import bgContactMe from '../Assets/images/bgContact-main.jpg';

import { contactValidationSchema } from "../Validations/ContactValidation";

const ContactMe = () => {
    const contactInputNames = {
        fullname: "",
        subject: "",
        email: "",
        message: ""
    };

    const formik = useFormik({
        initialValues: contactInputNames,
        validationSchema: contactValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    })

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
                    <Box component={"form"} dir="rtl" autoComplete={'off'} mt={3} onSubmit={formik.handleSubmit}>
                        <Grid2 container spacing={2}>
                            <Grid2 xs={12} sm={6}>
                                <TextField 
                                    fullWidth
                                    id="fullname" 
                                    label="نام خانوادگی"
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Face6Rounded />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values?.fullname}
                                    onChange={formik.handleChange}
                                    error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                                    helperText={formik.touched.fullname && formik.errors.fullname}
                                    />
                            </Grid2>
                            <Grid2 xs={12} sm={6}>
                                <TextField 
                                    fullWidth
                                    id="email" 
                                    label="ایمیل" 
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <EmailRounded />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values?.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    />
                            </Grid2>
                            <Grid2 xs={12}>
                                <TextField 
                                    fullWidth
                                    id="subject" 
                                    label="عنوان" 
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SubjectRounded />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values?.subject}
                                    onChange={formik.handleChange}
                                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                                    helperText={formik.touched.subject && formik.errors.subject}
                                    />
                            </Grid2>
                            <Grid2 xs={12}>
                                <TextField 
                                    fullWidth
                                    multiline
                                    rows={6}
                                    id="message" 
                                    label="پیام شما" 
                                    variant="outlined"
                                    value={formik.values?.message}
                                    onChange={formik.handleChange}
                                    error={formik.touched.message && Boolean(formik.errors.message)}
                                    helperText={formik.touched.message && formik.errors.message}
                                    />
                            </Grid2>
                            <Grid2 xs={12}>
                                <Button
                                    type="submit"
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