import {Box, styled} from "@mui/material";
import CarouselSlide from "react-material-ui-carousel";
import ImageResolution from "../../ImageResolution";
import {MLAB_THEME} from "@styles/mlabTheme";
import Pagination from "@components/carousel/Pagination";

interface CarouselData {
    id: number;
    name: string;
    images: string;
}
interface CarouselDataProps {
    data: CarouselData[]
}

const HeroImageProps = styled('div')`
  align-items: end;
`

const Carousel = ({data}: CarouselDataProps) => {
    return (
        <>
            <CarouselSlide
                navButtonsAlwaysInvisible
                indicators={false}
            >
                {data.map((element, index) => (
                    <HeroImageProps key={element.id}>
                        <ImageResolution name={element.name} images={element.images}/>
                    </HeroImageProps>
                ))}
            </CarouselSlide>
        </>
    );
}

export default Carousel;