import { css, styled } from '@mui/material';
import { MlabColorType } from '@styles/mlabTheme';
import { useId } from 'react';

interface ToggleProps {
    on: boolean;
    onClick: () => void;
    color?: MlabColorType;
}


const Checkbox = styled('input')<{ color: MlabColorType }>(({ theme, color }) => css`
  display: none;

  &:checked + label > span {
    transform: translateX(0.875rem);
  }

  &:checked + label {
    background-color: ${theme.palette[color][600]};

    :hover {
      background-color: ${theme.palette[color][700]};
    }

    :active {
      background-color: ${theme.palette[color][800]};
    }
  }
`);

const Label = styled('label')(({ theme }) => css`
  display: inline-block;
  position: relative;
  height: 1.25rem;
  width: 2.125rem;
  border-radius: 11px;
  background-color: ${theme.palette.gray[600]};
  cursor: pointer;

  :hover {
    background-color: ${theme.palette.gray[700]};
  }

  :active {
    background-color: ${theme.palette.gray[800]};
  }
`);

const Ellipse = styled('span')(({ theme }) => css`
  position: absolute;
  height: 1.125rem;
  width: 1.125rem;
  top: 1px;
  left: 1px;
  border-radius: 50%;
  background-color: ${theme.palette.common.white};
`);

const Span = styled('span')`
  height: 1.25rem;
`;

const Toggle = ({ on, onClick, color = 'pink' }: ToggleProps) => {
    const id = useId();

    return (
        <Span>
            <Checkbox id={id} type={'checkbox'} color={color} checked={on}
                      onChange={() => {
                      }}
                      onClick={onClick} />
            <Label htmlFor={id}>
                <Ellipse />
            </Label>
        </Span>
    );
};

export default Toggle;