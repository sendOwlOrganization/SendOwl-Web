import {Box, styled} from "@mui/material";
import CarouselSlide from "react-material-ui-carousel";
import ImageOptimize from "../imageOptimize";
import {MLAB_THEME} from "@styles/mlabTheme";
import Pagination from "@components/carousel/pagination/Pagination";

interface CarouselData {
    id: number;
    name: string;
    images: string;
}
interface CarouselDataProps {
    data: CarouselData[];
    check?: boolean;
}

const HeroImageProps = styled('div')`
  align-items: end;
  display: flex;
`

const Carousel = ({data, check}: CarouselDataProps) => {
    return (
        <>
            <CarouselSlide
                navButtonsAlwaysInvisible
                indicators={false}
            >
                {data.map((element, index) => (
                    <HeroImageProps key={element.id}>
                        <ImageOptimize name={element.name} images={element.images}/>
                        {check ? <Pagination page={element.id} size={data.length} margin={"0 0 0.625rem -3rem"}/> : null}
                    </HeroImageProps>
                ))}
            </CarouselSlide>
        </>
    );
}

export default Carousel;