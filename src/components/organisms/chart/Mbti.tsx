import { Box, Grid, useTheme } from '@mui/material';
import dynamic from "next/dynamic";
import * as React from "react";
import {useMemo} from "react";
import {continueStatement} from "@babel/types";

const MyResponsivePie = dynamic(()=> import ('./MbtiPie'), {ssr:false})

interface DataList {
    id: number;
    name: string;
    count: number;
}

interface Response {
    data: DataList[];
    error?: string;
}

const Mbti = ({data, error}: Response) => {
    const theme = useTheme();

    const categoryPopularList = useMemo(
        () =>
        data.map((ele, idx) => {
            if (ele.count > 0){
                return {
                    id: ele.id,
                    label: ele.name,
                    value: ele.count
                }
            }else{
                return 0
            }
        }), [data]);

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
                <MyResponsivePie data={categoryPopularList}/>
            </Box>
        </>
    );
};

export default Mbti;