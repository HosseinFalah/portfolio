import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Grid2 from '@mui/material/Unstable_Grid2';

import bgProjects from '../Assets/images/bgProjects.jpg';
import bgCrypto from '../Assets/images/cryptoCurrencies.jpg';

const Projects = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${bgProjects})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: 1,
            height: 1
        }}>
            <Box sx={{ backgroundColor: 'rgba(0,0,0,.3)', height: 1, overflowY: 'scroll' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" color={grey[100]} sx={{textAlign: "center"}} my={4}>نمونه کار ها</Typography>
                    <Grid2 container spacing={2}>
                        <Grid2 xs={12} sm={6}>
                            <Card dir='rtl'>
                                <CardActionArea >
                                    <CardMedia
                                        component="img"
                                        sx={{ height: "300px", width: '300px', margin: "auto", objectFit: 'contain' }}
                                        image={bgCrypto}
                                        alt="PortFolio"
                                    />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                پروژه Crypto Currencies
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button color="warning">
                                        بیشتر
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid2>
                        <Grid2 xs={12} sm={6}></Grid2>
                        <Grid2 xs={12} sm={6}></Grid2>
                        <Grid2 xs={12} sm={6}></Grid2>
                    </Grid2>
                </Container>
            </Box>
        </Box>
    )
}

export default Projects