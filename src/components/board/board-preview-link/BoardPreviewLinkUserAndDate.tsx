import {Typography} from '@mui/material';
import {formatDate} from '@tools/date';
import useThemeMode from '@tools/useThemeMode';

interface BoardPreviewLinkUserAndDateProps {
    userId: number;
    name: string;
    mbti: string;
    regDate: Date;
}

const BoardPreviewLinkUserAndDate = ({mbti, name, userId, regDate}: BoardPreviewLinkUserAndDateProps) => {
    const {isDark} = useThemeMode();
    return (
        <Typography variant={'body2'} color={(theme) => theme.palette.gray[500]} fontWeight={'bold'}>
            <Typography
                variant={'body2'}
                color={(theme) => theme.palette.gray[500]}
                fontWeight={'bold'}
                component={'span'}>
                {`${mbti} `}
            </Typography>
            {name}
            <Typography variant={'body2'} fontWeight={'bold'} component={'span'}>
                ・
            </Typography>
            <Typography
                variant={'body2'}
                color={(theme) => (isDark ? theme.palette.gray[700] : 'inherit')}
                component={'span'}>
                {formatDate(regDate)}
            </Typography>
        </Typography>
    );
};

export default BoardPreviewLinkUserAndDate;
