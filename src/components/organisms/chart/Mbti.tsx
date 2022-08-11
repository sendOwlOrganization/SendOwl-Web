import { Box, Grid, useTheme } from '@mui/material';
import dynamic from "next/dynamic";
import * as React from "react";

const MyResponsivePie = dynamic(()=> import ('./MbtiPie'), {ssr:false})

interface DataList {
    id: number;
    name: string;
    count: number;
}

interface Data {
    data: DataList[]
}

const Mbti = ({data}: Data) => {
    const theme = useTheme();

    const categoryPopular = data.map((item) => {
        return {
            id: item.id,
            label: item.name,
            value: item.count
        }
    })

    return (
        <>
            <Box
                position={'fixed'}
                width={200}
                height={300}
                margin={'40px 0px 20px 800px'}
                padding={'10px 0 10px 0'}
                sx={{
                    borderRadius: '20px',
                    border: `1px solid ${theme.palette.grey[200]}`,
                }}
                textAlign={'center'}>
                카테고리 인기 순위
                <MyResponsivePie data={categoryPopular}/>
            </Box>
        </>
    );
};

export default Mbti;