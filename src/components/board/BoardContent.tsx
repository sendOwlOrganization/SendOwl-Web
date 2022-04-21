import { Box, Typography, useTheme } from '@mui/material';
import { ComponentProps } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BoardContentProps {
    content: string;
}

const componentsOverride: ComponentProps<typeof ReactMarkdown>['components'] = {
    h1: (props) => <Typography component={'p'} variant={'h1'} fontSize={'22px'} {...props}/>,
    h2: (props) => <Typography component={'p'} variant={'h2'} fontSize={'20px'} {...props}/>,
    h3: (props) => <Typography component={'p'} variant={'h3'} fontSize={'18px'} {...props}/>,
    h4: (props) => <Typography component={'p'} variant={'h4'} fontSize={'16px'} {...props}/>,
    h5: (props) => <Typography component={'p'} variant={'h5'} fontSize={'14px'} {...props}/>,
    h6: (props) => <Typography component={'p'} variant={'h6'} fontSize={'12px'} {...props}/>,
};

const BoardContent = ({ content }: BoardContentProps) => {
    const theme = useTheme();
    return (
        <Box margin={theme.spacing(2)}>
            <ReactMarkdown components={componentsOverride} remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </Box>);
};

export default BoardContent;