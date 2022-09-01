import { styled, Typography } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';

interface SearchContainerProps {
    title: string;
    titleAction?: ReactNode;
}

const Container = styled('div')`
`;


const TitleArea = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.875rem;
`;

const SearchContainer = (props: PropsWithChildren<SearchContainerProps>) => {
    const { title, titleAction, children } = props;
    return (
        <Container>
            <TitleArea>
                <Typography variant={'subtitle4'}>
                    {title}
                </Typography>
                {titleAction}
            </TitleArea>
            {children}
        </Container>
    );
};

export default SearchContainer;