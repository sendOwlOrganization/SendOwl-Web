import { Box, useTheme } from '@mui/material';
import ContentListTitle from './ContentListTitle';
import ContentPostList from './ContentPostList';

interface ContentInfo {
    title: string;
}
const ContentList = ({ title }: ContentInfo) => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    border: `1px solid ${theme.palette.grey[200]}`,
                    backgroundColor: 'white',
                    display: '',
                    alignItems: 'center',
                }}
                borderRadius={'20px'}
                marginBottom='20px'
                width={781}
                height={'auto'}
                fontSize={'12px'}>
                <ContentListTitle title={title} />
                <ContentPostList />
            </Box>
        </>
    );
};

export default ContentList;
