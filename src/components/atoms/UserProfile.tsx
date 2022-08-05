import { Grid, Avatar, Box, useTheme } from '@mui/material';
import enfj from '../../../public/images/enfj.png';
import Image from 'next/image';

interface ProfileSize {
    size: number;
    textView?: string;
}
const UserProfile = ({ size, textView }: ProfileSize) => {
    const theme = useTheme();

    return (
        <>
            <Grid
                sx={{ display: 'flex', borderRadius: '100%' }}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <Box
                    borderRadius={'50%'}
                    border='transparent'
                    sx={{
                        backgroundImage:
                            'linear-gradient(#B488F8, #83D9A6, #3FC4EA, #FDBD5F)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    width={size}
                    height={size}>
                    <Box
                        sx={{
                            border: `2px solid white`,
                        }}
                        borderRadius={'50%'}
                        width={size - 5}
                        height={size - 5}>
                        <Image
                            src={enfj}
                            alt=''
                            width={size - 5}
                            height={size - 5}
                            style={{
                                borderRadius: '50%',
                            }}
                        />
                    </Box>
                </Box>
                <Grid sx={{display: { lg: 'block', xs: 'none'}}}>
                    <Grid
                        margin={'0 50px 0 20px'}
                        display={'inline-grid'}
                        fontSize={'12px'}

                    >
                        {/* {user.name} + {user.mbti} */}
                        <Grid color={'red'} fontSize={'10px'}>
                            welcome
                        </Grid>
                        <span>Professional critic</span>
                        <span>ENFJ</span>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
};

export default UserProfile;
