import { Box, Slide as MuiSlide, SlideProps } from '@mui/material';
import { PropsWithChildren, useRef } from 'react';

interface CustomSlideProps extends PropsWithChildren<SlideProps> {
    height?: string;
}

const Slide = ({ height, children, ...props }: CustomSlideProps) => {
    const ref = useRef(null);
    return (
        <Box height={height} ref={ref}>
            <MuiSlide {...props} container={ref.current}>
                <div>{children}</div>
            </MuiSlide>
        </Box>
    );
};

export default Slide;
