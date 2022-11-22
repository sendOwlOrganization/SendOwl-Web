import RadioButtonIcon from '@components/icons/RadioButtonIcon';
import { css, styled } from '@mui/material';
import useThemeMode from '@tools/useThemeMode';
import { ReactNode } from 'react';

interface RadioSelectProps<T> {
    value?: T,
    onChange: (value: T) => void;
    items: T[];
    render: (value: T) => ReactNode;
    areEqual?: (a?: T, b?: T) => boolean;
    getKey?: (value: T) => string;
}


const OrderedList = styled('ol')(({ theme }) => css`
  list-style: none;
  padding: 0;
  margin: 0;
`);


const ListItem = styled('li')(({ theme }) => css`
  padding: 1rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: ${theme.palette.mode === 'dark'
            ? theme.palette.gray[1000]
            : theme.palette.gray[100]};
  }
`);

const RadioSelect = <T, >({
                              value,
                              onChange,
                              items,
                              render,
                              areEqual = (a, b) => a === b,
                              getKey = (v) => String(v),
                          }: RadioSelectProps<T>) => {
    const { isDark } = useThemeMode();

    return (
        <OrderedList>
            {items.map(item => {
                const isSelected = areEqual(value, item);
                return (
                    <ListItem key={getKey(item)} onClick={() => onChange(item)}>
                        <RadioButtonIcon color={isSelected ? 'pink' : 'gray'}
                                         colorKey={isSelected ? 600 : isDark ? 800 : 200}
                                         sx={{ marginRight: '0.75rem' }} />
                        {render(item)}
                    </ListItem>
                );
            })}
        </OrderedList>
    );
};

export default RadioSelect;