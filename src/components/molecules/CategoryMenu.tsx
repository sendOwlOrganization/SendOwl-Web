import BoxBorder from '@atoms/BoxBorder';
import BoxGradient from '@atoms/BoxGradient';
import { Grid } from '@mui/material';

const CategoryMenu = () => {
    return (
        <>
            <Grid display={'flex'}>
                <BoxGradient width={70} height={70} borderRadius={'50%'}>
                    <BoxBorder borderRadius={'50%'} width={60} height={60}>
                        카테고리
                    </BoxBorder>
                </BoxGradient>
                <BoxGradient width={70} height={70} borderRadius={'50%'}>
                    <BoxBorder borderRadius={'50%'} width={60} height={60}>
                        짤방
                    </BoxBorder>
                </BoxGradient>
                <BoxGradient width={70} height={70} borderRadius={'50%'}>
                    <BoxBorder borderRadius={'50%'} width={60} height={60}>
                        연애
                    </BoxBorder>
                </BoxGradient>
                <BoxGradient width={70} height={70} borderRadius={'50%'}>
                    <BoxBorder borderRadius={'50%'} width={60} height={60}>
                        대화방
                    </BoxBorder>
                </BoxGradient>
                <BoxGradient width={70} height={70} borderRadius={'50%'}>
                    <BoxBorder borderRadius={'50%'} width={60} height={60}>
                        +
                    </BoxBorder>
                </BoxGradient>
            </Grid>
        </>
    );
};

export default CategoryMenu;
