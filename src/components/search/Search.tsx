import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, IconButton, InputBase, Stack } from '@mui/material';

const Search = () => {
    return (
        <>
            <Grid
                flex='1'
                container
                justifyContent={'flex-end'}
                sx={{
                    alignItems: 'center',
                    display: { lg: 'none', xs: 'block' },
                }}
            >
                <IconButton
                    component='form'
                    sx={{
                        display: {
                            lg: 'none',
                            xs: 'block',
                        },
                    }}
                >
                    <SearchIcon
                        sx={{
                            color: '#111111',
                            fontSize: '30px',
                            display: 'flex',
                        }}
                    />
                </IconButton>
            </Grid>

            <Stack
                component='form'
                sx={{
                    p: '2px 4px',
                    display: {
                        lg: 'block',
                        xs: 'none',
                    },
                    alignItems: 'center',
                    border: 2,
                    borderRadius: '25px',
                    margin: '20px 0 20px 0',
                }}
                display='flex'
            >
                <IconButton
                    type='submit'
                    sx={{ p: '10px', flex: 1 }}
                    aria-label='search'
                >
                    <SearchIcon sx={{ color: '#111111' }} />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1, minWidth: '90%' }}
                    inputProps={{
                        placeholder: '관심있는 내용을 검색해보세요 !',
                        style: { fontWeight: 'bold' },
                    }}
                />
                <IconButton sx={{ color: '#111111' }}>
                    <CloseIcon />
                </IconButton>
            </Stack>
        </>
    );
};

export default Search;
