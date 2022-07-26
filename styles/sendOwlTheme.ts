import { createTheme } from '@mui/material';

const createSendOwlTheme = () =>
    createTheme({
        palette: {
            primary: {
                main: '#B488F8',
            },
            secondary: {
                main: '#83D9A6',
            },
        },
        shape: {
            borderRadius: 0,
        },
        typography: {
            fontFamily: [
                'Noto Sans KR'
            ].join(','),
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    contained: {
                        color: 'white',
                        background:
                            'linear-gradient(239deg, rgba(80,35,206,1) 0%, rgba(125,178,255,1) 100%)',
                        border: '1px solid',
                        borderImage:
                            'linear-gradient(239deg, rgba(40,35,206,1) 0%, rgba(125,178,255,1) 100%) 1',
                    },
                },
            },
        },
    });

export default createSendOwlTheme;