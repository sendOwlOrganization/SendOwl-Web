import { Card, CardContent, Typography } from '@mui/material';

const NoticePage = () => {
    return (
        <>
            <Card elevation={0}>
                <CardContent>
                    <Typography variant={'h1'} align={'center'}>
                        공지/이벤트
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default NoticePage;
