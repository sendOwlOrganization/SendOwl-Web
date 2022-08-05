import SearchIcon from '@mui/icons-material/Search';
import {Grid, IconButton, InputBase, Stack, useTheme, Box, SxProps} from '@mui/material';
import {MLAB_PALETTE} from "@styles/sendOwlTheme";

interface SearchLocation {
    sx: SxProps;
    width: number;
}
const MainSearchBar = ({sx, width}: SearchLocation) => {
    const theme = useTheme();
    return (
        <>
            <Stack sx={sx}
                  width={width}>
                <Grid display={'flex'}>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} marginLeft={'20px'}
                    >
                        <IconButton
                            type='submit'
                            sx={{ p: '10px', backgroundColor: '#B4E8F7', borderRadius: '12px', marginRight: '30px',
                                }}
                            aria-label='search'
                        >
                        <SearchIcon sx={{ color: `${MLAB_PALETTE.blue}`}} />
                    </IconButton>
                    </Box>
                    <Stack
                        component='form'
                        sx={{
                            p: '1px 15px',
                            borderRadius: '20px',
                            margin: '10px 0px 10px 0px',
                            border: `1px solid ${theme.palette.grey[200]}`,
                        }}
                        width={width-25}
                        >
                        <InputBase
                            sx={{
                                minHeight: '65px',
                            }}
                            inputProps={{
                                placeholder: 'search...',
                            }}
                        />
                    </Stack>
                </Grid>
            </Stack>
        </>
    );
};

export default MainSearchBar;
