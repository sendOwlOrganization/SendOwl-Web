import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Stack, useTheme } from '@mui/material';

const MainSearchBar = () => {
    const theme = useTheme();
    return (
        <>
            <Stack
                component='form'
                sx={{
                    p: '1px 15px',
                    display: {
                        lg: 'block',
                        xs: 'none',
                    },
                    alignItems: 'center',
                    borderRadius: '20px',
                    margin: '10px 0px 10px 0px',
                    border: `1px solid ${theme.palette.grey[200]}`,
                    bgcolor: 'white',
                }}
                width='783px'
                display='flex'>
                <InputBase
                    sx={{
                        ml: 1,
                        flex: 1,
                        minWidth: '93%',
                        minHeight: '65px',
                    }}
                    inputProps={{
                        placeholder: 'search...',
                    }}
                />
                <IconButton
                    type='submit'
                    sx={{ p: '10px', flex: 1 }}
                    aria-label='search'>
                    <SearchIcon sx={{ color: 'grey' }} />
                </IconButton>
            </Stack>
        </>
    );
};

export default MainSearchBar;
