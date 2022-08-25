import PercentPieChart from '@components/chart/percent-pie-chart/PercentPieChart';
import MemberRatio from '@components/widgets/mbti-widget/MemberRatio';
import UserMbti from '@components/widgets/mbti-widget/UserMbti';
import { Box, Card } from '@mui/material';
import * as React from 'react';

interface MbtiData {
    id: string,
    label: string,
    value: number,
}

interface MbtiDataProps {
    // FIXME: change to real type later
    user: {
        mbti: string;
    };
    data: MbtiData[];
}

const parseMbti = (mbti: string): string => mbti.slice(0, 4);

const MbtiWidget = ({ data, user }: MbtiDataProps) => {
    const totalCount = data.reduce((acc, d) => acc + d.value, 0);
    const count = data.find(d => d.label === parseMbti(user.mbti))?.value || 0;

    return (
        <Card elevation={0}>
            <Box height={'9.5rem'} display={'flex'}
                 justifyContent={'space-between'}
                 padding={'1.5rem'}>
                <Box alignSelf={'stretch'}
                     display={'flex'}
                     flexDirection={'column'}
                     justifyContent={'space-between'}>
                    <UserMbti mbti={user.mbti} />
                    <Box width={'100%'} height={'1.25rem'} flexGrow={0} display={'flex'} flexDirection={'row'}
                         justifyContent={'flex-start'} alignItems={'flex-start'} gap={'4px'} padding={0}>
                        <MemberRatio count={count} total={totalCount} />
                    </Box>
                </Box>
                <PercentPieChart data={data}
                                 highlightIndex={data.findIndex(d => d.label === parseMbti(user.mbti)) || 0} />

            </Box>
        </Card>
    );
};

export default MbtiWidget;