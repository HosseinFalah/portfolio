import { v4 as uuidv4 } from 'uuid';

import { Typography } from '@mui/material';
import { HomeRepairServiceRounded } from '@mui/icons-material';

import { 
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineContent
} from '@mui/lab';

import { workInfo } from '../../Constants/details';

const DevExpTimeline = () => {
    return (
        <>
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
        </>
    )
}

export default DevExpTimeline