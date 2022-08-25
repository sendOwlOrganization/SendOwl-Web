import { Box, useTheme } from '@mui/material';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const MyResponsivePie = dynamic(() => import ('./MbtiPie'), { ssr: false });

interface DataList {
    id: number;
    name: string;
    count: number;
}

interface Data {
    data: DataList[];
}

const Mbti = ({ data }: Data) => {

    const theme = useTheme();

    const categoryPopularList = useMemo(
        () =>
            data.map((ele, idx) => {
                if (ele.count > 0) {
                    return {
                        id: ele.id,
                        label: ele.name,
                        value: ele.count,
                    };
                } else {
                    return 0;
                }
            }), [data]);

    return (
        <>
            <Box
                width={200}
                height={300}
                sx={{
                    borderRadius: '20px',
                    border: `1px solid ${theme.palette.gray[200]}`,
                }}
                textAlign={'center'}>
                카테고리 인기 순위
                <MyResponsivePie data={categoryPopularList} />
            </Box>
        </>
    );
};

export default Mbti;