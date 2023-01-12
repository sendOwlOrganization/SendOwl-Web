import {styled} from "@mui/material";
import CarouselSlide from "react-material-ui-carousel";
import ImageOptimize from "./ImageOptimize";
import Pagination from "@components/carousel/pagination/Pagination";

interface CarouselData {
    id: number;
    name: string;
    src: string;
}
interface CarouselDataProps {
    data: CarouselData[];
    showPagination?: boolean;
}

const HeroImageProps = styled('div')`
  align-items: end;
  display: flex;
`

const Carousel = ({data, showPagination}: CarouselDataProps) => {
    return (
        <>
            <CarouselSlide
                navButtonsAlwaysInvisible
                indicators={false}
            >
                {data.map((element) => (
                    <HeroImageProps key={element.id}>
                        <ImageOptimize name={element.name} src={element.src}/>
                        {showPagination ? <Pagination page={element.id} size={data.length} margin={"0 0 0.625rem -3rem"}/> : null}
                    </HeroImageProps>
                ))}
            </CarouselSlide>
        </>
    );
}

export default Carousel;