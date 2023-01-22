import { useFormik } from "formik";
import { useTheme } from '@mui/material/styles'; // Grid version 2

import ReCAPTCHA from "react-google-recaptcha";
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import { EmailRounded, Face6Rounded, SubjectRounded } from '@mui/icons-material';
import { grey, purple } from '@mui/material/colors';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import { contactValidationSchema } from "../../Validations/ContactValidation";

const ContactForm = () => {
    const theme = useTheme();

    const contactInputNames = {
        fullname: "",
        subject: "",
        email: "",
        message: "",
        recaptcha: ""
    };

    const formik = useFormik({
        initialValues: contactInputNames,
        validationSchema: contactValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    })
    return (
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
                    <ReCAPTCHA 
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        theme={theme.palette.mode}
                        hl="fa"
                        onChange={value => {
                            formik.setFieldValue("recaptcha", value);
                        }}/>
                        {
                            formik.errors.recaptcha && formik.touched.recaptcha &&
                                (
                                    <Typography variant="caption" color="error">
                                        {formik.errors.recaptcha}
                                    </Typography>
                                )
                        }
                    <Button
                        type="submit"
                        variant='contained'
                        sx={{
                            mt: 2,
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
    )
}

export default ContactForm