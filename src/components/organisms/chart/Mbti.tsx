import { Box, Grid, useTheme } from '@mui/material';
import Image from 'next/image';
import dynamic from "next/dynamic"
import * as React from "react";
import {getPopularCategories} from "@api/index";
import {log} from "util";

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

    return (
        <>
            <Box
                width={200}
                height={300}
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
