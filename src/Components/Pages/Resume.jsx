import { v4 as uuidv4 } from 'uuid';
import { Typography, Chip, Divider } from '@mui/material';
import { 
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineConnector
} from '@mui/lab';
import { HomeRepairServiceRounded, SchoolRounded } from '@mui/icons-material';
import Grid2 from '@mui/material/Unstable_Grid2';

import { devEdu, workInfo } from '../../Constants/details';

const Resume = () => {
    return (
        <Grid2 
            container 
            maxWidth='lg' 
            margin={"auto"} 
            px={6} 
            sx={{ mt: 4 }}
        >
            <Grid2 
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
            >
                <Divider 
                    textAlign='center' 
                    sx={{
                        "&::before, &::after": { 
                            borderColor: "warning.main" 
                        }
                    }}
                >
                    <Chip 
                        variant='outlined'
                        icon={<HomeRepairServiceRounded/>} 
                        color="warning" 
                        label={
                            <Typography 
                                variant='body1' 
                                sx={{ textAlign: "center" }}
                            >
                                تجربیات
                            </Typography>
                        } sx={{ p: 3}} >
                    </Chip>
                </Divider>
                <Timeline position='alternate' sx={{ direction: "ltr" }}>
                    {
                        workInfo.map((item, index) => (
                            <TimelineItem key={uuidv4()}>
                                <TimelineSeparator>
                                    <TimelineDot color='warning' variant='outlined'>
                                        <HomeRepairServiceRounded color='warning'/>
                                    </TimelineDot>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='body1' color="#fff" mb={2}>
                                        {item.year}
                                    </Typography>
                                    <Typography variant='body2' fontSize={20} color="#fff" mb={2}>
                                        {item.cart}
                                    </Typography>
                                    <Typography variant='body2' color="#fff" mb={2}>
                                        {item.place}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                </Timeline>
            </Grid2>
            <Grid2 
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
            >
                <Divider 
                    textAlign='center' 
                    sx={{
                        "&::before, &::after": { 
                            borderColor: "info.main" 
                        }
                    }}
                >
                    <Chip
                        variant='outlined'
                        icon={<SchoolRounded/>} 
                        color="info" 
                        label={
                            <Typography 
                                variant='body1' 
                                sx={{ textAlign: "center" }}
                            >
                                تحصیلات
                            </Typography>
                        } sx={{ p: 3}} >
                    </Chip>
                </Divider>
                <Timeline position='alternate' sx={{ direction: "ltr" }}>
                    {
                        devEdu.map((item, index) => (
                            <TimelineItem key={uuidv4()}>
                                <TimelineSeparator>
                                    <TimelineDot color='info' variant='outlined'>
                                        <SchoolRounded color='info'/>
                                    </TimelineDot>
                                    { index !== 1 ? <TimelineConnector/> : null }
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='body1' color="#fff" mb={2}>
                                        {item.year}
                                    </Typography>
                                    <Typography variant='body2' color="#fff" mb={2}>
                                        {item.cart}
                                    </Typography>
                                    <Typography variant='body2' color="#fff" mb={2}>
                                        {item.major}
                                    </Typography>
                                    <Typography variant='body2' color="#fff" mb={2}>
                                        {item.place}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                </Timeline>
            </Grid2>
        </Grid2>
    )
}

export default Resume;