import ApproveIcon from '@components/icons/ApproveIcon';
import ArrowDownIcon from '@components/icons/ArrowDownIcon';
import ArrowUpIcon from '@components/icons/ArrowUpIcon';
import { Box, ClickAwayListener, css, styled } from '@mui/material';
import { MLAB_OPACITY_PALETTE } from '@styles/mlabTheme';
import { useState } from 'react';

interface SelectProps<T> {
    items: T[];
    value: T;
    onChange: (value: T) => void;
    getLabel: (item: T) => string;
    getKey: (item: T) => string;
}

const Button = styled('button', {
    shouldForwardProp: (propName: PropertyKey) => propName !== 'selected',
})<{ open: boolean }>(({ theme, open }) => css`
  border: 1px solid ${open
          ? theme.palette.pink[600]
          : theme.palette.mode === 'light'
                  ? theme.palette.gray[200]
                  : theme.palette.gray[900]};
  background-color: ${theme.palette.mode === 'light'
          ? theme.palette.common.white
          : theme.palette.gray[1000]};
  border-radius: 8px;
  font-size: ${theme.typography.caption1.fontSize};
  font-weight: bold;
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  color: ${theme.palette.mode === 'light'
          ? theme.palette.gray[1000]
          : theme.palette.gray[100]};
  display: flex;
  align-items: center;
  min-width: 110px;
  justify-content: space-between;
`);

const Items = styled('ol', {
    shouldForwardProp: (propName: PropertyKey) => {
        return propName !== 'open';
    },
})<{ open: boolean }>(({ theme, open }) => css`
  z-index: ${theme.zIndex.modal};
  display: ${open ? 'block' : 'none'};
  position: absolute;
  backdrop-filter: blur(15px);
  margin: 0.25rem 0 0;
  border: 1px solid ${theme.palette.mode === 'light'
          ? theme.palette.gray[200]
          : theme.palette.gray[900]};
  min-width: 110px;
  border-radius: 8px;
  list-style: none;
  padding: 0.75rem 0.75rem 0 0.75rem;
  background-color: ${theme.palette.mode === 'dark' ? MLAB_OPACITY_PALETTE.black[800] : MLAB_OPACITY_PALETTE.white[800]};
`);

const Item = styled('li', {
    shouldForwardProp: (propName: PropertyKey) => propName !== 'selected',
})<{ selected: boolean }>(({ theme, selected }) => css`
  color: ${selected
          ? theme.palette.pink[600]
          : theme.palette.mode === 'dark' ? theme.palette.gray[100] : theme.palette.gray[1000]};
  font-weight: bold;
  font-size: ${theme.typography.caption1.fontSize};
  margin-bottom: 0.75rem;
  padding: 2px 4px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;

  & > span {
    margin: 0 5px 2px 0;
  }

  &:hover {
    color: ${theme.palette.gray[100]};
    background-color: ${theme.palette.pink[600]};

    & path {
      fill: ${theme.palette.gray[100]};
    }
  }

  &:active {
    color: ${MLAB_OPACITY_PALETTE.white[600]};
    background-color: ${theme.palette.pink[600]};

    & path {
      fill: ${MLAB_OPACITY_PALETTE.white[600]};
    }
  }
`);

const Select = <T, >({ items, value, onChange, getLabel, getKey }: SelectProps<T>) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleChange = (item: T) => () => {
        onChange(item);
        setOpen(false);
    }

    return (
        <>
            <ClickAwayListener onClickAway={() => setOpen(false)}>
                <Box position={'relative'}>
                    <Button onClick={() => setOpen(o => !o)} open={open}>
                        {getLabel(value)}
                        {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </Button>
                    <Items open={open}>
                        {items.map(item => <Item selected={getKey(item) === getKey(value)}
                                                 key={getKey(item)}
                                                 onClick={handleChange(item)}>
                            {getKey(item) === getKey(value) &&
                                <ApproveIcon scale={0.75} color={'pink'} colorKey={600} />}
                            {getLabel(item)}
                        </Item>)}
                    </Items>
                </Box>
            </ClickAwayListener>
        </>
    );
};

export default Select;