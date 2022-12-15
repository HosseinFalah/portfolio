import { 
    EmailRounded, 
    LocationOnRounded, 
    PersonRounded, 
    PhoneRounded,
    GitHub, 
    LinkedIn, 
    WhatsApp, 
    Instagram, 
    Telegram } from "@mui/icons-material";

export const aboutDev = [
    {
        content: "حسین فلاح",
        sizeIcon: "h5",
        icon: <PersonRounded sx={{ verticalAlign: 'bottom', color: 'grey.main', mr: 1 }} />
    },
    {
        content: "hosseinfalah2021@gmail.com",
        icon: <EmailRounded sx={{ verticalAlign: 'bottom', color : 'grey.main', mr: 1 }}/>
    },
    {
        content: "09922477517",
        icon: <PhoneRounded sx={{ verticalAlign: 'bottom', color : 'grey.main', mr: 1 }}/>
    },
    {
        content: "ایران ,خوزستان ,اندیمشک",
        icon: <LocationOnRounded sx={{ verticalAlign: 'bottom', color: 'grey.main', mr: 1 }}/>
    },
]

export const socialMediaInfo = [
    {
        mediaLink: 'https://t.me/HosseinProgramer',
        mediaTitle: "تلگرام من",
        mediaIcon:  <Telegram/>,
        mediaColor: '#0215e3'
    },
    {
        mediaLink: "https://www.instagram.com/hossein____falah/",
        mediaTitle: "اینستاگرام من",
        mediaIcon:  <Instagram/>,
        mediaColor: '#ff0303'
    },
    {
        mediaLink: "https://api.whatsapp.com/send?phone=989922477517",
        mediaTitle: "واتساپ من",
        mediaIcon: <WhatsApp/>,
        mediaColor: '#0bce57'
    },
    {
        mediaLink: "https://www.linkedin.com/in/hossein-falah-5024a4227/",
        mediaTitle: "لینکداین من",
        mediaIcon:   <LinkedIn/>,
        mediaColor: '#0352ff'
    },
    {
        mediaLink: "https://github.com/HosseinFalah",
        mediaTitle: "گیت هاب من",
        mediaIcon:  <GitHub/>,
        mediaColor: '#000'
    },
    {
        mediaLink: "tel:+989922477517",
        mediaTitle: "شماره تماس",
        mediaIcon:  <PhoneRounded/>,
        mediaColor: '#0bce57'
    }
]