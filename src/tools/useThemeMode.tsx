import { useTheme } from '@mui/material';

const useThemeMode = () => {
    const theme = useTheme();
    const { mode } = theme.palette;
    return {
        theme,
        mode,
        isDark: mode === 'dark',
        isLight: mode === 'light',
    };
};

export default useThemeMode;
