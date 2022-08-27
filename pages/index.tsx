import { Card, CardContent, Typography } from '@mui/material';
import NextLink from 'next/link';

interface HomePageProps {
}

const Home = ({}: HomePageProps) => {
    return (
        <>
            <Card elevation={0}>
                <CardContent>
                    <Typography align={'center'} variant={'h1'} gutterBottom>
                        홈
                    </Typography>
                    <NextLink href={'/login'} passHref>
                        <Typography component={'a'} display={'block'} color={'primary.main'} align={'center'}
                                    variant={'h2'}>
                            임시 로그인 페이지 링크
                        </Typography>
                    </NextLink>
                </CardContent>
            </Card>
        </>
    );
};

export default Home;
