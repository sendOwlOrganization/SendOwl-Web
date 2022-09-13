import { Typography } from '@mui/material';
import { formatDate } from '@tools/date';

interface BoardPreviewLinkUserAndDateProps {
    id: number;
    name: string;
    mbti: string;
    date: string;
}

const BoardPreviewLinkUserAndDate = ({ mbti, name, id, date }: BoardPreviewLinkUserAndDateProps) => {
    return (
        <Typography variant={'body2'} color={theme => theme.palette.gray[800]}>
            <Typography variant={'body2'}
                        color={theme => theme.palette.lightPink[600]}
                        fontWeight={'bold'}
                        component={'span'}>
                {`${mbti} `}
            </Typography>
            {name}
            <Typography variant={'body2'}
                        color={theme => theme.palette.gray[600]}
                        fontWeight={'bold'}
                        component={'span'}>
                ・
            </Typography>
            <Typography variant={'body2'} color={theme => theme.palette.gray[600]}
                        component={'span'}>
                {formatDate(date)}
            </Typography>
        </Typography>
    );
};

export default BoardPreviewLinkUserAndDate;