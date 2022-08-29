import { Card, CardContent, Typography } from '@mui/material';

const BoardsPage = () => {
    return (
        <Card elevation={0}>
            <CardContent>
                <Typography variant={'h1'} align={'center'}>
                    전체 게시물
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BoardsPage;