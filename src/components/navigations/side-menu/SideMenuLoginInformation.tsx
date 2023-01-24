import SettingIcon from '@components/icons/SettingIcon';
import { css, styled, Typography } from '@mui/material';

const Container = styled('div')(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
    `
);

const UserInformation = styled('div')(({ theme }) => css``);

const SideMenuLoginInformation = () => {
    return (
        <Container>
            <UserInformation>
                <Typography variant={'subtitle2'}>
                    <Typography variant={'subtitle2'} component={'span'} color={(theme) => theme.palette.pink[600]}>
                        {'MBTI '}
                    </Typography>
                    닉네임
                </Typography>
                <Typography component={'div'} variant={'caption2'} color={(theme) => theme.palette.gray[400]}>
                    abcdefg@mlab.com
                </Typography>
            </UserInformation>
            <SettingIcon clickable disableHoverBackground />
        </Container>
    );
};

export default SideMenuLoginInformation;
