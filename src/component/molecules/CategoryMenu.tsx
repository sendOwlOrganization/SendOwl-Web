import { Grid } from '@mui/material';
import BoxGradient from '../../component/atoms/BoxGradient';
import BoxBorder from '../atoms/BoxBorder';

interface Display {
    width: number;
    height: number;
    margin?: string
}

const CategoryMenu = ({width, height, margin}: Display) => {
    return (
        <>
            <Grid display={'flex'}>
                <BoxGradient width={width} height={height} borderRadius={'50%'} margin={margin}>
                    <BoxBorder borderRadius={'50%'} width={width-10} height={height-10}>
                        카테고리
                    </BoxBorder>
                </BoxGradient>
                <BoxGradient width={width} height={height} borderRadius={'50%'} margin={margin}>
                    <BoxBorder borderRadius={'50%'} width={width-10} height={height-10}>
                        짤방
                    </BoxBorder>
                </BoxGradient>
                <BoxGradient width={width} height={height} borderRadius={'50%'} margin={margin}>
                    <BoxBorder borderRadius={'50%'} width={width-10} height={height-10}>
                        연애
                    </BoxBorder>
                </BoxGradient>
                <BoxGradient width={width} height={height} borderRadius={'50%'} margin={margin}>
                    <BoxBorder borderRadius={'50%'} width={width-10} height={height-10}>
                        대화방
                    </BoxBorder>
                </BoxGradient>
                <BoxGradient width={width} height={height} borderRadius={'50%'} margin={margin}>
                    <BoxBorder borderRadius={'50%'} width={width-10} height={height-10}>
                        +
                    </BoxBorder>
                </BoxGradient>
            </Grid>
        </>
    );
};

export default CategoryMenu;
