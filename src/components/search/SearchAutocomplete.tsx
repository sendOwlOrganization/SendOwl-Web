import Highlighter from '@components/highlighter/Highlighter';
import SearchIcon from '@components/icons/SearchIcon';
import { Box, css, styled, Typography } from '@mui/material';
import { highlight } from '@tools/string';
import { RefObject, useEffect, useMemo, useState } from 'react';

const MIN_HEIGHT = '344px';

const OrderedList = styled('ol')(({ theme }) => css`
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: ${MIN_HEIGHT};
`);

const ListItem = styled('li')(({ theme }) => css`
`);

const Button = styled('button')(({ theme }) => css`
  display: flex;
  border-radius: 8px;
  padding: 0.5rem 0;
  margin: 0.25rem 0;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: inherit;
  font-size: ${theme.typography.subtitle3.fontSize};

  & > *:first-child {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  :hover {
    background-color: ${theme.palette.gray[200]};
  }

  :focus {
    background-color: ${theme.palette.gray[200]};
  }
`);

interface SearchAutocompleteProps {
    query: string;
    setSearch: (value: string) => void;
    inputRef?: RefObject<HTMLInputElement>;
}

const mockWords = [
    'ENTJ',
    'ENTJ 특징',
    'ENTJ 팩폭',
    'ENTJ INFP',
    'ENTJ 빙고',
    'ENTJ 짤',
    'ENTJ 밈',
    'ENTJ 궁합',
    'ENTJ 연예인',
    'ENTJ 성격',
];

const id = 'autocomplete-results';

const SearchAutocomplete = ({ query, setSearch, inputRef }: SearchAutocompleteProps) => {
    const [focused, setFocused] = useState<number>(NaN);
    useEffect(() => {
        const useArrow = (e: KeyboardEvent) => {
            const buttons = document.querySelectorAll(`#${id} > li > button`);
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                setFocused(f => (isNaN(f) || f <= 0) ? NaN : Math.max(0, f - 1));
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setFocused(f => isNaN(f) ? 0 : Math.min(buttons.length - 1, f + 1));
            }
        };
        document.addEventListener('keydown', useArrow);
        return () => {
            document.removeEventListener('keydown', useArrow);
        };
    }, [focused]);

    useEffect(() => {
        if (isNaN(focused)) {
            inputRef?.current?.focus();
            return;
        }
        const button = document.querySelectorAll(`#${id} > li > button`)[focused] as (HTMLButtonElement | undefined);
        if (button) {
            button.focus();
        }
    }, [focused, inputRef]);

    const elements = useMemo(() => {
        return mockWords.map((word, i) => {
            const highlights = highlight(word, query);
            if (highlights.every(w => !w.highlighted))
                return null;
            return (
                <ListItem key={`${word}-${i}`}>
                    <Button onClick={() => {
                        setSearch(word);
                    }}>
                        <SearchIcon />
                        <Highlighter highlights={highlights} />
                    </Button>
                </ListItem>
            );
        }).filter(el => !!el);
    }, [query, setSearch]);

    return elements.length ? (
        <OrderedList id={id}>
            {elements}
        </OrderedList>
    ) : (
        <Box display={'flex'} height={MIN_HEIGHT} justifyContent={'center'} alignItems={'center'}>
            <Typography variant={'subtitle3'} fontWeight={400} color={theme => theme.palette.gray[600]}>
                <Typography variant={'subtitle3'} color={'inherit'} component={'span'}>
                    {`"${query}"`}
                </Typography>
                에 대한 검색결과가 없습니다
            </Typography>
        </Box>
    );
};

export default SearchAutocomplete;