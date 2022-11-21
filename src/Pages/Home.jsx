import { useEffect, useRef, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import bgHome from "../Assets/images/bgHome-min.jpg";
import { links } from "../Constants/particles";

const Home = () => {
    const nameRef = useRef(null);
    const infoRef = useRef(null);

    const strings = [
        "MERN Stack Developer",
        "Web Designer",
        "Freelancer"
    ];

    useEffect(() => {
        const TypedName = new Typed(nameRef.current, {
            strings: ["حسین فلاح"],
            typeSpeed: 200,
            backSpeed: 50,
            backDelay: 20,
            showCursor: false
        });

        const TypedInfo = new Typed(infoRef.current, {
            strings,
            startDelay: 1500,
            typeSpeed: 200,
            backSpeed: 80,
            backDelay: 80,
            loop: true,
            showCursor: false
        });

        // UnMount
        return () => {
            TypedName.destroy();
            TypedInfo.destroy();
        }

    }, [])

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Box sx={{
            backgroundImage: `url(${bgHome})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Particles 
                id="tsparticles" 
                init={particlesInit} 
                loaded={particlesLoaded}
                options={links}/>
            <Typography
                ref={nameRef}
                variant="h3" 
                color='#fff'>
            </Typography>
            <Typography
                ref={infoRef}
                variant="h4"
                color="#fff"
                sx={{
                    mt: 3,
                    textDecoration: 'underline',
                    textDecorationColor: '#1976d2'
                }}>
                    توسعه دهنده جاوااسکریپت
            </Typography>
        </Box>
    )
}

export default Home