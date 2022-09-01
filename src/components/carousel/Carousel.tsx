import {Box} from "@mui/material";
import CarouselSlide from "react-material-ui-carousel";
import Image from "next/image";
import {MLAB_NEUTRAL_PALETTE, MLAB_OPACITY_PALETTE} from "@styles/mlabTheme";

interface CarouselData {
    id: number;
    name: string;
    images: string;
}
interface CarouselDataProps {
    data: CarouselData[]
}

const Carousel = ({data}: CarouselDataProps) => {
    return (
        <Box sx={{width: '56rem', height: '22rem', borderRadius: '16px', padding: 0}}>
            <CarouselSlide
                indicatorIconButtonProps={{
                    style: {
                        color: MLAB_OPACITY_PALETTE.white[300],
                        position: 'relative',
                        bottom: '3rem',
                        zIndex: 1,
                        width: '1rem'
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        color: MLAB_NEUTRAL_PALETTE.white,
                    },
                }}
                navButtonsAlwaysInvisible
            >
                {data.map((element, index) => (
                    <div key={element.id}>
                        <Image src={element.images} alt={element.name} width={869} height={349} unoptimized/>
                    </div>
                ))}
            </CarouselSlide>
        </Box>
    );
}

export default Carousel;