import { Business, BusinessCenter, EmojiObjects, Forum, Insights, School } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid, styled } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';
import { BoardCategory, getBoardCategoryName } from '../../types/Category';

interface BoardCategoryTitleProps {
    title: string;
    id?: number;
}

const DetailsLink = styled('a')`
  font-weight: 400;
  font-size: 12px;
  text-decoration: none;
  color: inherit;
`;

const categoryIconMapping: Record<string, ReactNode> = {
    ['토픽 베스트']: <Insights />,
    [getBoardCategoryName(BoardCategory.FREE)]: <EmojiObjects />,
    [getBoardCategoryName(BoardCategory.STUDY)]: <School />,
    [getBoardCategoryName(BoardCategory.CAREER)]: <Business />,
    [getBoardCategoryName(BoardCategory.INTERVIEW)]: <Forum />,
    [getBoardCategoryName(BoardCategory.JOB)]: <BusinessCenter />,
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
