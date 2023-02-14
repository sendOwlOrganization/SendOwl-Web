import RadioSelect from '@components/radio/RadioSelect';
import { Box, Fade, Typography } from '@mui/material';

interface GenderProps {
    gender: string;
    setGender: (gender: string) => void;
}

const GENDERS: Record<string, string> = {
    MALE: '남성',
    FEMALE: '여성',
    OTHER: '선택 안함',
};

const POSSIBLE_GENDERS: string[] = Object.keys(GENDERS);

const Gender = ({ gender, setGender }: GenderProps) => {
    return (
        <>
            <Box sx={{ padding: '1rem 1rem 0 1rem' }}>
                <Fade timeout={{ appear: 1500, enter: 500, exit: 500 }} in mountOnEnter unmountOnExit>
                    <Typography variant={'title1'} fontWeight={'bold'} component={'h2'} marginBottom={'0.25rem'}>
                        성별을 선택해 주세요
                    </Typography>
                </Fade>
                <Fade timeout={{ appear: 1500, enter: 1500, exit: 500 }} in mountOnEnter unmountOnExit>
                    <Typography variant={'body2'} component={'h2'} marginBottom={'3.375rem'}>
                        해당 정보는 인사이트에 활용되며, 공개되지 않아요
                    </Typography>
                </Fade>
            </Box>
            <RadioSelect
                onChange={setGender}
                items={POSSIBLE_GENDERS}
                value={gender}
                render={(v, isSelected) => (
                    <Typography
                        variant={'body2'}
                        fontWeight={'bold'}
                        color={(theme) => (isSelected && theme.palette.pink[600]) || undefined}>
                        {GENDERS[v]}
                    </Typography>
                )}
            />
        </>
    );
};

export default Gender;
