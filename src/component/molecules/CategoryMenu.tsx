import { Grid } from '@mui/material';
import BoxContainer from '../../component/atoms/BoxGradient';

const CategoryMenu = () => {
    return (
        <>
            <Grid display={'flex'}>
                <BoxContainer
                    width={70}
                    height={70}
                    text='카테고리'
                    border='50%'
                />
                <BoxContainer width={70} height={70} text='짤방' border='50%' />
                <BoxContainer width={70} height={70} text='연애' border='50%' />
                <BoxContainer
                    width={70}
                    height={70}
                    text='대화방'
                    border='50%'
                />
                <BoxContainer width={70} height={70} text='+' border='50%' />
            </Grid>
        </>
    );
};

export default CategoryMenu;
