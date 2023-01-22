import { HomeRepairServiceRounded, SchoolRounded } from '@mui/icons-material';
import Grid2 from '@mui/material/Unstable_Grid2';

import CustomDivider from '../Common/CustomDivider';
import DevEduTimeline from './DevEduTimeline';
import DevExpTimeline from './DevExpTimeline';

const Resume = () => {
    return (
        <Grid2 container maxWidth='lg' margin={"auto"} px={6} sx={{ mt: 4 }}>
            <Grid2 xs={12} sm={12} md={12} lg={6} xl={6}>
                <CustomDivider
                    bColor="warning.main"
                    color="warning"
                    align="center"
                    icon={<HomeRepairServiceRounded/>}
                    text="تجربیات"
                />
                <DevExpTimeline/>
            </Grid2>
            <Grid2 xs={12} sm={12} md={12} lg={6} xl={6}>
                <CustomDivider
                    bColor="info.main"
                    color="info"
                    align="center"
                    icon={<SchoolRounded/>}
                    text="تحصیلات"
                />
                <DevEduTimeline/>
            </Grid2>
        </Grid2>
    )
}

export default Resume;