import Chip from '@components/chip/Chip';
import SearchContainer from '@components/search/SearchContainer';
import { css, styled, Typography } from '@mui/material';
import { useState } from 'react';

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

interface RecentlySearchedProps {
    words: string[];
    setSearch: (value: string) => void;
}

const RemoveButton = styled('button')(
    ({ theme }) => css`
        outline: none;
        border: none;
        cursor: pointer;
        background-color: inherit;
        font-size: ${theme.typography.body2.fontSize};
        color: ${theme.palette.gray[700]};
    `
);

const RecentlySearched = ({ words = [], setSearch }: RecentlySearchedProps) => {
    const [wordList, setWordList] = useState<string[]>(words);

    const removeWord = (word: string) => () => {
        setWordList((wordList) => wordList.filter((w) => w !== word));
    };

    const removeAll = () => {
        setWordList([]);
    };

    return (
        <SearchContainer title={'최근 검색어'} titleAction={<RemoveButton onClick={removeAll}>전체 삭제</RemoveButton>}>
            <Keywords>
                {wordList.length ? (
                    wordList.map((word) => (
                        <Chip key={word} label={word} onClick={() => setSearch(word)} onClose={removeWord(word)} />
                    ))
                ) : (
                    <Typography
                        lineHeight={2.25}
                        color={(theme) => theme.palette.gray[600]}
                        marginLeft={'auto'}
                        marginRight={'auto !important'}>
                        최근 검색된 단어가 없습니다
                    </Typography>
                )}
            </Keywords>
        </SearchContainer>
    );
};

export default RecentlySearched;
