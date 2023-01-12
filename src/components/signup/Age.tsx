import RadioSelect from '@components/radio/RadioSelect';
import { Box, Fade, styled, Typography } from '@mui/material';

interface AgeProps {
    age: number;
    setAge: (age: number) => void;
}

const POSSIBLE_AGES: number[] = [10, 20, 30, 40, 50, 60];

const Section = styled('section')`
`;

const Age = ({ age, setAge }: AgeProps) => {
    return (
        <Section>
            <Box sx={{ padding: '1rem 1rem 0 1rem' }}>
                <Fade timeout={{ appear: 1500, enter: 500, exit: 500 }}
                      in mountOnEnter unmountOnExit>
                    <Typography variant={'title1'} fontWeight={'bold'} component={'h2'}>
                        서비스 이용을 위해
                    </Typography>
                </Fade>
                <Fade timeout={{ appear: 1500, enter: 1500, exit: 500 }}
                      in mountOnEnter unmountOnExit>
                    <Typography variant={'title1'} fontWeight={'bold'} component={'h2'} marginBottom={'3.375rem'}>
                        연령대를 선택해 주세요
                    </Typography>
                </Fade>
            </Box>
            <RadioSelect value={age}
                         onChange={setAge}
                         items={POSSIBLE_AGES}
                         render={(v, isSelected) => <Typography
                             variant={'body2'}
                             fontWeight={'bold'}
                             color={theme => isSelected && theme.palette.pink[600] || undefined}>
                             {v}대
                         </Typography>} />
        </Section>
    );
};

export default Age;