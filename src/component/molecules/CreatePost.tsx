import { Box, useTheme } from '@mui/material';
import Image from 'next/image';

const CreatePost = () => {
    const theme = useTheme();

    return (
        <>
            <Box
                borderRadius={'20px'}
                border='transparent'
                margin={'20px 20px 20px 0'}
                sx={{
                    backgroundImage:
                        'linear-gradient(#B488F8, #83D9A6, #3FC4EA, #FDBD5F)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                width={783}
                height={65}>
                <Box
                    sx={{
                        border: `1px solid ${theme.palette.grey[200]}`,
                        backgroundColor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    borderRadius={'20px'}
                    width={782}
                    height={64}
                    fontSize={'12px'}>
                    <Box
                        sx={{
                            border: `2px solid white`,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        borderRadius={'50%'}
                        width={45}
                        height={45}
                        margin='0px 20px 0px 20px'>
                        <Image
                            src='/images/enfj.png'
                            alt=''
                            width={45}
                            height={45}
                            style={{
                                borderRadius: '50%',
                            }}
                        />
                    </Box>
                    create post...
                </Box>
            </Box>
        </>
    );
};

export default CreatePost;
