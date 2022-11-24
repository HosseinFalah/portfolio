import { useState, useEffect } from "react";

import { Box, LinearProgress, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

import bgSkills from "../Assets/images/bgSkills.jpg";
import { skills } from "../Constants/skills";

const Skills = () => {
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [tailwindcss, setTailwindcss] = useState(0);
    const [bootstrap, setBootstrap] = useState(0);
    const [sass, setSass] = useState(0);
    const [javaScript, setJavaScript] = useState(0);
    const [gitGitHub, setGitGitHub] = useState(0);
    const [reactjs, setReactjs] = useState(0);
    const [redux, setRedux] = useState(0);
    const [mui, setMui] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setHtml(oldProgress => {
                const diff = Math.floor(Math.random() * 10);
                return Math.min(oldProgress + diff, skills[0].progressValue);
            })
            setCss(oldProgress => {
                const diff = Math.floor(Math.random() * 10);
                return Math.min(oldProgress + diff, skills[1].progressValue);
            })
            setTailwindcss(oldProgress => {
                const diff = Math.floor(Math.random() * 10);
                return Math.min(oldProgress + diff, skills[2].progressValue);
            })
            setBootstrap(oldProgress => {
                const diff = Math.floor(Math.random() * 10);
                return Math.min(oldProgress + diff, skills[3].progressValue);
            })
            setSass(oldProgress => {
                const diff = Math.floor(Math.random() * 10);
                return Math.min(oldProgress + diff, skills[4].progressValue);
            })
            setJavaScript(oldProgress => {
                const diff = Math.floor(Math.random() * 10);
                return Math.min(oldProgress + diff, skills[5].progressValue);
            })
            setGitGitHub(oldProgress => {
                const diff = Math.floor(Math.random() * 10);
                return Math.min(oldProgress + diff, skills[6].progressValue);
            })
            setReactjs(oldProgress => {
                const diff = Math.floor(Math.random() * 10);
                return Math.min(oldProgress + diff, skills[7].progressValue);
            })
            setRedux(oldProgress => {
                const diff = Math.floor(Math.random() * 10);
                return Math.min(oldProgress + diff, skills[8].progressValue);
            })
            setMui(oldProgress => {
                const diff = Math.floor(Math.random() * 10);
                return Math.min(oldProgress + diff, skills[9].progressValue);
            })
        }, 100);
        
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <Box sx={{
            backgroundImage: `url(${bgSkills})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: 1,
            height: 1
        }}>
            <Box sx={{ backgroundColor: 'rgba(0,0,0,.3)', height: 1 }}>
                <Typography variant="h3" color='#fff' textAlign='center' sx={{ pt: 4 }}>تخصص من</Typography>
                <Grid2 
                    container
                    spacing={{ xs: 2, md: 3 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    maxWidth='lg'
                    margin='auto'
                    alignItems="center"
                    justifyContent='center'
                    sx={{
                        backgroundColor: '#1a1a1ab3',
                        borderRadius: 2,
                        mt: 4
                    }}
                >
                    <Grid2 xs={6} p={3}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'row-reverse', 
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography color='#fff' textAlign='end'>{skills[0].name}</Typography>
                            <Typography variant="body2" color="text.secondary">{`${Math.round(html)}%`}</Typography>
                        </Box>
                        <LinearProgress variant="determinate" color="success" value={html} sx={{ mt: 1, height: 6 }}/>
                    </Grid2>
                    <Grid2 xs={6} p={3}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'row-reverse', 
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography color='#fff' textAlign='end'>{skills[1].name}</Typography>
                            <Typography variant="body2" color="text.secondary">{`${Math.round(css)}%`}</Typography>
                        </Box>
                        <LinearProgress variant="determinate" color="success" value={css} sx={{ mt: 1, height: 6 }}/>
                    </Grid2>
                    <Grid2 xs={6} p={3}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'row-reverse', 
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography color='#fff' textAlign='end'>{skills[2].name}</Typography>
                            <Typography variant="body2" color="text.secondary">{`${Math.round(tailwindcss)}%`}</Typography>
                        </Box>
                        <LinearProgress variant="determinate" color="success" value={tailwindcss} sx={{ mt: 1, height: 6 }}/>
                    </Grid2>
                    <Grid2 xs={6} p={3}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'row-reverse', 
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography color='#fff' textAlign='end'>{skills[3].name}</Typography>
                            <Typography variant="body2" color="text.secondary">{`${Math.round(bootstrap)}%`}</Typography>
                        </Box>
                        <LinearProgress variant="determinate" color="success" value={bootstrap} sx={{ mt: 1, height: 6 }}/>
                    </Grid2>
                    <Grid2 xs={6} p={3}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'row-reverse', 
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography color='#fff' textAlign='end'>{skills[4].name}</Typography>
                            <Typography variant="body2" color="text.secondary">{`${Math.round(sass)}%`}</Typography>
                        </Box>
                        <LinearProgress variant="determinate" color="success" value={sass} sx={{ mt: 1, height: 6 }}/>
                    </Grid2>
                    <Grid2 xs={6} p={3}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'row-reverse', 
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography color='#fff' textAlign='end'>{skills[5].name}</Typography>
                            <Typography variant="body2" color="text.secondary">{`${Math.round(javaScript)}%`}</Typography>
                        </Box>
                        <LinearProgress variant="determinate" color="success" value={javaScript} sx={{ mt: 1, height: 6 }}/>
                    </Grid2>
                    <Grid2 xs={6} p={3}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'row-reverse', 
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography color='#fff' textAlign='end'>{skills[6].name}</Typography>
                            <Typography variant="body2" color="text.secondary">{`${Math.round(gitGitHub)}%`}</Typography>
                        </Box>
                        <LinearProgress variant="determinate" color="success" value={gitGitHub} sx={{ mt: 1, height: 6 }}/>
                    </Grid2>
                    <Grid2 xs={6} p={3}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'row-reverse', 
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography color='#fff' textAlign='end'>{skills[7].name}</Typography>
                            <Typography variant="body2" color="text.secondary">{`${Math.round(reactjs)}%`}</Typography>
                        </Box>
                        <LinearProgress variant="determinate" color="success" value={reactjs} sx={{ mt: 1, height: 6 }}/>
                    </Grid2>
                    <Grid2 xs={6} p={3}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'row-reverse', 
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography color='#fff' textAlign='end'>{skills[8].name}</Typography>
                            <Typography variant="body2" color="text.secondary">{`${Math.round(redux)}%`}</Typography>
                        </Box>
                        <LinearProgress variant="determinate" color="success" value={redux} sx={{ mt: 1, height: 6 }}/>
                    </Grid2>
                    <Grid2 xs={6} p={3}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'row-reverse', 
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography color='#fff' textAlign='end'>{skills[9].name}</Typography>
                            <Typography variant="body2" color="text.secondary">{`${Math.round(mui)}%`}</Typography>
                        </Box>
                        <LinearProgress variant="determinate" color="success" value={mui} sx={{ mt: 1, height: 6 }}/>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    )
}

export default Skills