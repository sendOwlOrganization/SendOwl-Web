import BannerTitle from '@components/banner/BannerTitle';
import AngleDownIcon from '@components/icons/AngleDownIcon';
import { Box, Card, Collapse, css, ListItem, styled, Typography } from '@mui/material';
import { useState } from 'react';

interface PopularKeywordWidgetProps {
    keywords: string[];
}

const KeywordsContainer = styled('ol')`
  padding: 0 1.5rem;
  list-style: none;
  margin: 0;
`;

const Rotate = styled('div')<{ on: boolean }>(({ theme, on }) => css`
  & button {
    ${on && css`transform: rotate(180deg);`}
  }
`);

const PopularKeywordWidget = ({ keywords }: PopularKeywordWidgetProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Card elevation={0}>
            <BannerTitle>
                <Box display={'flex'}
                     width={'100%'}
                     justifyContent={'space-between'}
                     alignItems={'center'}>
                    <Typography variant={'body1'} fontWeight={'bold'}>
                        👑 인기 검색어
                    </Typography>
                    <Rotate on={open}>

                        <AngleDownIcon onClick={() => setOpen(!open)} disableHoverBackground />
                    </Rotate>
                </Box>
            </BannerTitle>
            <KeywordsContainer>
                {
                    keywords.slice(0, 3).map(k => <ListItem button key={k}>{k}</ListItem>)
                }
                <Collapse in={open}>
                    {keywords.slice(3).map(k => <ListItem button key={k}>{k}</ListItem>)}
                </Collapse>
            </KeywordsContainer>
        </Card>
    );
};

export default PopularKeywordWidget;