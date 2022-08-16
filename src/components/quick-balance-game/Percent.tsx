import { styled } from '@mui/material';

const PercentNumber = styled('span')`
  font-size: 1.25rem;
  font-weight: bold;
`;
const PercentSymbol = styled('span')`
  font-size: 0.75rem;
  font-weight: lighter;
`;

interface PercentProps {
    number: number;
}

const Percent = ({ number }: PercentProps) => {
    return (
        <>
            <PercentNumber>
                {Math.round(number)}
                <PercentSymbol>%</PercentSymbol>
            </PercentNumber>
        </>
    );
};

export default Percent;