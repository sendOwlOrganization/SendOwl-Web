import { css, styled, Typography } from '@mui/material';
import { ReactNode, useMemo } from 'react';

interface AutocompleteProps {
    query: string;
    words: string[];
    renderWord?: (word: string) => ReactNode;
    notFoundMessage?: string;
    onClick: (word: string) => void;
    min?: number;
}

const OrderedList = styled('ol')(
    ({ theme }) => css`
        list-style: none;
        padding: 0;
        margin: 0;
    `
);

const ListItem = styled('li')(
    ({ theme }) => css`
        padding: 1rem 1.5rem;
        cursor: pointer;
        transition: background-color 100ms ease-in-out;

        &:hover {
            background-color: ${theme.palette.mode === 'dark' ? theme.palette.gray[1000] : theme.palette.gray[100]};
        }
    `
);

const Autocomplete = ({ query, words, onClick, notFoundMessage, renderWord, min = 1 }: AutocompleteProps) => {
    const elements = useMemo(() => {
        return words
            .filter((w) => query.length >= min && w.includes(query))
            .map((word, i) => (
                <ListItem key={`${word}-${i}`} onClick={() => onClick(word)}>
                    {renderWord ? renderWord(word) : word}
                </ListItem>
            ));
    }, [query, words, onClick, renderWord, min]);

    return elements.length ? (
        <OrderedList>{elements}</OrderedList>
    ) : query.length >= min ? (
        <Typography>{notFoundMessage}</Typography>
    ) : null;
};

export default Autocomplete;
