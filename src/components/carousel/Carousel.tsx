import {Box, Button, MobileStepper, Paper, Typography, useTheme} from "@mui/material";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {useState} from "react";
import Image from "next/image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface CarouselData {
    id: number;
    name: string;
    images: string;
}
interface CarouselDataProps {
    data: CarouselData[]
}

const Carousel = ({data}: CarouselDataProps) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = data.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{width: '56rem', height: '21.813rem'}}
             border-radius={'16px'}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {data.map((step, index) => (
                    <div key={step.id}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Image src={step.images} alt={step.name} width={869} height={349} unoptimized/>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
        </Box>
    );
}

export default Carousel;