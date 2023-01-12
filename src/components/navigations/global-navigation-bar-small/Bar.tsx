import { css, styled } from '@mui/material';
import { MLAB_OPACITY_PALETTE } from '@styles/mlabTheme';

const BAR_HEIGHT = '3.5rem';

const Bar = styled('header')(({ theme }) => css`
  height: ${BAR_HEIGHT};
  background-color: ${theme.palette.mode === 'dark' ? MLAB_OPACITY_PALETTE.black[600] : MLAB_OPACITY_PALETTE.white[600]};
  backdrop-filter: blur(30px);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: ${theme.zIndex.appBar};
  border-bottom: 1px solid ${theme.palette.mode === 'dark' ? theme.palette.gray[900] : theme.palette.gray[200]};
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`);

export default Bar;