import Chip from '@components/chip/Chip';
import SearchContainer from '@components/search/SearchContainer';
import { styled, Typography } from '@mui/material';

const Keywords = styled('div')`
    display: flex;
    align-items: center;

    & > * {
        margin-right: 0.75rem;
    }

    & > *:last-child {
        margin-right: 0;
    }
`;

interface SearchRecommendationProps {
    words: string[];
    setSearch: (value: string) => void;
}

const SearchRecommendation = (props: SearchRecommendationProps) => {
    const { setSearch, words = [] } = props;
    return (
        <SearchContainer title={'추천 검색어'}>
            <Keywords>
                {words.length ? (
                    words.map((word) => <Chip key={word} label={word} onClick={() => setSearch(word)} />)
                ) : (
                    <Typography
                        lineHeight={2.25}
                        color={(theme) => theme.palette.gray[600]}
                        marginLeft={'auto'}
                        marginRight={'auto !important'}>
                        추천 검색어가 없습니다
                    </Typography>
                )}
            </Keywords>
        </SearchContainer>
    );
};

export default SearchRecommendation;
