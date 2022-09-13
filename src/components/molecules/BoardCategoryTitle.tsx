import { EmojiObjects, Face, Insights } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid, styled } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

interface BoardCategoryTitleProps {
    title: string;
    id?: number;
}

const DetailsLink = styled('a')`
  font-weight: normal;
  font-size: 12px;
  text-decoration: none;
  color: inherit;
`;

const categoryIconMapping: Record<string, ReactNode> = {
    ['토픽 베스트']: <Insights />,
    ['자유 게시판']: <EmojiObjects />,
    ['익명 게시판']: <Face />,
};

const BoardCategoryTitle = ({ title, id }: BoardCategoryTitleProps) => {
    return (
        <Grid display={'flex'} alignItems={'center'}>
            <Grid justifyItems={'center'} marginRight={'5px'}>
                {categoryIconMapping[title]}
            </Grid>
            <Grid
                container
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                height={'70px'}
                fontSize={'18px'}
                fontWeight={'800'}>
                {title}
                <Link href={`/categories/${id}`} passHref>
                    <DetailsLink>
                        더보기
                        <ArrowForwardIosIcon sx={{ fontSize: '10px' }} />
                    </DetailsLink>
                </Link>
            </Grid>
        </Grid>
    );
};

export default BoardCategoryTitle;
