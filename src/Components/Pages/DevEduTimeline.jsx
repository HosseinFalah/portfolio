import { v4 as uuidv4 } from 'uuid';
import { Typography } from '@mui/material';

import { 
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineConnector
} from '@mui/lab';
import { SchoolRounded } from '@mui/icons-material';

import { devEdu } from '../../Constants/details';

const DevEduTimeline = () => {
    return (
        <>
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
        </>
    )
}

export default DevEduTimeline