import css from '@emotion/css';
import styled from '@emotion/styled';
import { HighlightArray } from '@tools/string';
import { Fragment } from 'react';

interface HighlighterProps {
    highlights: HighlightArray;
}

const Highlighted = styled('span')(
    ({ theme }) => css`
        color: ${theme.color.pink[600]};
        font-weight: bold;
    `
);

const Highlighter = ({ highlights }: HighlighterProps) => {
    return (
        <div>
            {highlights.map(({ word, highlighted }, i) =>
                highlighted ? (
                    <Highlighted key={`${word}-${i}`}>{word}</Highlighted>
                ) : (
                    <Fragment key={`${word}-${i}`}>{word}</Fragment>
                )
            )}
        </div>
    );
};

export default Highlighter;
