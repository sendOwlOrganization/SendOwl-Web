import Highlighter from '@components/highlighter/Highlighter';
import SearchIcon from '@components/icons/SearchIcon';
import { css, styled } from '@mui/material';
import { highlight } from '@tools/string';
import NextLink from 'next/link';
import { RefObject, useEffect, useMemo, useState } from 'react';

const MIN_HEIGHT = '344px';

const OrderedList = styled('ol')(
    ({ theme }) => css`
        list-style: none;
        padding: 0;
        margin: 0;
        min-height: ${MIN_HEIGHT};
    `
);

const ListItem = styled('li')(({ theme }) => css``);

const Anchor = styled('a')(
    ({ theme }) => css`
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
            background-color: ${theme.palette.mode === 'dark' ? theme.palette.gray[900] : theme.palette.gray[200]};
        }

        :focus {
            background-color: ${theme.palette.mode === 'dark' ? theme.palette.gray[900] : theme.palette.gray[200]};
        }
    `
);

interface SearchAutocompleteProps {
    words?: string[];
    query: string;
    inputRef?: RefObject<HTMLInputElement>;
}

const id = 'autocomplete-results';
const LINKS_SELECTOR = `#${id} > li > a`;

const SearchAutocomplete = ({ words = [], query, inputRef }: SearchAutocompleteProps) => {
    const [focused, setFocused] = useState<number>(NaN);
    useEffect(() => {
        const useArrow = (e: KeyboardEvent) => {
            const buttons = document.querySelectorAll(LINKS_SELECTOR);
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                setFocused((f) => (isNaN(f) || f <= 0 ? NaN : Math.max(0, f - 1)));
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setFocused((f) => (isNaN(f) ? 0 : Math.min(buttons.length - 1, f + 1)));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const index = isNaN(focused) ? 0 : focused;
                const link = document.querySelectorAll(LINKS_SELECTOR)[index] as HTMLAnchorElement | undefined;
                link?.click();
            }
        };
        document.addEventListener('keydown', useArrow);
        return () => {
            document.removeEventListener('keydown', useArrow);
        };
    }, [focused]);

    useEffect(() => {
        setFocused(NaN);
    }, [query]);

    useEffect(() => {
        if (isNaN(focused)) {
            inputRef?.current?.focus();
            return;
        }
        const button = document.querySelectorAll(LINKS_SELECTOR)[focused] as HTMLAnchorElement | undefined;
        if (button) {
            button.focus();
        }
    }, [focused, inputRef]);

    const elements = useMemo(() => {
        return [...new Set([query, ...words])]
            .map((word, i) => {
                const highlights = highlight(word, query);
                if (highlights.every((w) => !w.highlighted)) return null;
                return (
                    <ListItem key={`${word}-${i}`}>
                        <NextLink href={`/search?query=${encodeURI(word)}`} passHref>
                            <Anchor>
                                <SearchIcon />
                                <Highlighter highlights={highlights} />
                            </Anchor>
                        </NextLink>
                    </ListItem>
                );
            })
            .filter((el) => !!el);
    }, [words, query]);

    return <OrderedList id={id}>{elements}</OrderedList>;
};

export default SearchAutocomplete;
