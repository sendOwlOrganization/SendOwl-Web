import { AccessTimeOutlined, CommentOutlined, VisibilityOutlined } from '@mui/icons-material';
import { Box, styled, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';

interface BoardHeaderProps {
    title: string;
    author: string;
    date: string;
    pageView: number;
    commentCount: number;
}

const Header = styled('header')`
  margin: ${({ theme }) => theme.spacing(2)};
`;

const BoardHeader = ({ title, author, date, pageView, commentCount }: BoardHeaderProps) => {
    const theme = useTheme();
    const datetime = useMemo(() => new Date(date).toLocaleDateString('ko-KR'), [date]);

    return (
        <Header>
            <Typography variant={'h1'}
                        margin={`${theme.spacing(1)} 0`}
                        fontSize={'20px'}
                        fontWeight={'700'}>
                {title}
            </Typography>
            <Typography component={'p'}
                        color={theme.palette.primary.main /* TODO: need to change color */}
                        margin={`${theme.spacing(1)} 0`}
                        variant={'subtitle1'}>
                {author}
            </Typography>

            <Box display={'flex'}>
                <Typography component={'span'}
                            variant={'subtitle2'}
                            display={'flex'}
                            alignItems={'center'}
                            marginRight={theme.spacing(2)}
                            color={theme.palette.text.disabled}>
                    <AccessTimeOutlined sx={{ marginRight: '2px' }} fontSize={'inherit'}/>
                    <Typography variant={'inherit'} component={'time'}>
                        {datetime}
                    </Typography>
                </Typography>

                <Typography component={'span'}
                            variant={'subtitle2'}
                            display={'flex'}
                            alignItems={'center'}
                            marginRight={theme.spacing(2)}
                            color={theme.palette.text.disabled}>
                    <VisibilityOutlined sx={{ marginRight: '2px' }} fontSize={'inherit'}/>
                    {pageView}
                </Typography>

                <Typography component={'span'}
                            variant={'subtitle2'}
                            display={'flex'}
                            alignItems={'center'}
                            color={theme.palette.text.disabled}>
                    <CommentOutlined sx={{ marginRight: '2px' }} fontSize={'inherit'}/>
                    {commentCount}
                </Typography>
            </Box>
        </Header>
    );
};

export default BoardHeader;