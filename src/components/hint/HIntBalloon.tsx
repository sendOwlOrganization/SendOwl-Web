import {Box, css, Grow, styled, Typography} from '@mui/material';

interface TootipProps {
    left?: boolean;
    center?: boolean;
    right?: boolean;
    up?: boolean;
    down?: boolean;
}


const Tooltip = styled(Typography)(({theme}) => css`
  border-radius: 1rem;
  padding: 0.25rem 0.625rem;
  border-top-color: ${theme.palette.mode === 'dark'
          ? theme.palette.lightPink[600]
          : theme.palette.common.black};
  background-color: ${theme.palette.mode === 'dark'
          ? theme.palette.lightPink[600]
          : theme.palette.common.black};

  color: ${theme.palette.gray[100]};
  margin-bottom: 1rem;
  position: relative;

  // bottom
  &:after {
    content: "";
    position: absolute;
    bottom: -0.625rem;
    border-top: 10px solid black;
    border-top-color: inherit;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    left: ${(props) => (props.left === true ? '10%' : '90%')};
  }
`);

interface HintBalloonProps {
    label: string;
    location: string;
    open: boolean;
    align: string;
    justify: string;
}

const HintBalloon = (props: HintBalloonProps) => {
    const {label, open, align, justify} = props;
    return (
        <Grow in={open}
              style={{
                  transitionDelay: '250ms',
              }}
              mountOnEnter
              timeout={1000}
              unmountOnExit>
            <Box display={'flex'} justifyContent={'center'}>
                <Tooltip variant={'body2'}>
                    {label}
                </Tooltip>
            </Box>
        </Grow>
    );
};

export default HintBalloon;