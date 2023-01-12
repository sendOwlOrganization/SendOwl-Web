import { Theme } from '@mui/material';
import { MLAB_OPACITY_PALETTE } from '@styles/mlabTheme';

const REACT_SPRING_BOTTOM_SHEET_BACKGROUND = '--rsbs-bg';
const REACT_SPRING_BOTTOM_SHEET_BACKDROP_BACKGROUND = '--rsbs-backdrop-bg';
const REACT_SPRING_BOTTOM_SHEET_HEADER_BAR_BACKGROUND = '--rsbs-header-bar-bg';

export const updateReactSpringBottomSheetTheme = (theme: Theme) => {
    if (!document)
        return;
    const style = document.documentElement.style;
    style.setProperty(REACT_SPRING_BOTTOM_SHEET_BACKDROP_BACKGROUND, MLAB_OPACITY_PALETTE.black[400]);
    if (theme.palette.mode === 'dark') {
        style.setProperty(REACT_SPRING_BOTTOM_SHEET_HEADER_BAR_BACKGROUND, theme.palette.gray[700]!);
        style.setProperty(REACT_SPRING_BOTTOM_SHEET_BACKGROUND, theme.palette.common.black);
    } else {
        style.setProperty(REACT_SPRING_BOTTOM_SHEET_HEADER_BAR_BACKGROUND, theme.palette.gray[300]!);
        style.setProperty(REACT_SPRING_BOTTOM_SHEET_BACKGROUND, theme.palette.common.white);
    }
};