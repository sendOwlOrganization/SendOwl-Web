import { Card, CardContent, Typography } from '@mui/material';

interface HomePageProps {
}

const Home = ({}: HomePageProps) => {
    return (
        <>
            <Card elevation={0}>
                <CardContent>
                    <Typography align={'center'} variant={'h1'}>
                        홈
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default Home;
