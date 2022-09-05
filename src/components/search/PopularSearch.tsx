import SearchContainer from '@components/search/SearchContainer';
import { css, Grid, styled, Typography } from '@mui/material';
import { Fragment, PropsWithChildren } from 'react';

interface PopularSearchProps {
    setSearch: (value: string) => void;
    words: string[];
}


const Button = styled('button')(({ theme }) => css`
  display: flex;
  outline: none;
  width: 100%;
  background-color: inherit;
  border: none;
  align-items: center;
  border-radius: 16px;
  cursor: pointer;
  padding: 12px 0;

  :hover {
    background-color: ${theme.palette.gray[200]};
  }
`);

const GridItem = ({ index, children, onClick }: PropsWithChildren<{ index: number, onClick: () => void }>) => {
    return (
        <Grid item xs={6}>
            <Button onClick={onClick}>
                <Typography width={'28px'}
                            marginLeft={'0.25rem'}
                            fontWeight={700}
                            color={theme => index < 3
                                ? theme.palette.pink[600]
                                : theme.palette.gray[800]}>
                    {index + 1}
                </Typography>
                {children}
            </Button>
        </Grid>
    );
};


const PopularSearch = (props: PopularSearchProps) => {
    const { setSearch, words = [] } = props;
    return (
        <SearchContainer title={'인기 검색어'}>
            <Grid container spacing={0.75}>
                {
                    [0, 1, 2, 3, 4].map((i) => (
                        <Fragment key={i}>
                            <GridItem index={i}
                                      onClick={() => setSearch(words[i])}>
                                <Typography color={theme => theme.palette.common.black}>
                                    {words[i]}
                                </Typography>
                            </GridItem>
                            <GridItem index={i + 5}
                                      onClick={() => setSearch(words[i + 5])}>
                                <Typography color={theme => theme.palette.common.black}>
                                    {words[i]}
                                </Typography>
                            </GridItem>
                        </Fragment>
                    ))
                }

            </Grid>
        </SearchContainer>
    );
};

export default PopularSearch;