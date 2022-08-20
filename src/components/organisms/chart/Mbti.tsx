import { Box, Grid, useTheme } from '@mui/material';
import Image from 'next/image';
import dynamic from "next/dynamic";
import { data } from './MbtiPie';
import * as React from "react";

const MyResponsivePie = dynamic(()=> import ('./MbtiPie'), {ssr:false})

const Mbti = () => {
    const theme = useTheme();

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
                카테고리 별 순위
                <MyResponsivePie data={data}/>
            </Box>
        </>
    );
};

export default Mbti;
