import Percent from '@components/chart/percent-pie-chart/Percent';
import { Box, Fade, styled } from '@mui/material';
import { Pie } from '@nivo/pie';
import { MlabColorType } from '@styles/mlabTheme';
import useThemeMode from '@tools/useThemeMode';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';

interface PercentPieChartData {
    id: string;
    label: string;
    value: number;
}

interface PercentPieChartProps {
    data: PercentPieChartData[];
    color?: MlabColorType;
    highlightIndex: number;
    size?: number;
}

const mergeDataExcept = (exceptIndex: number, data: PercentPieChartData[]): PercentPieChartData => {
    return data.filter((_, i) => exceptIndex !== i)
        .reduce((acc, d) => ({ ...acc, value: acc.value + d.value }),
            { id: 'rest', label: 'rest', value: 0 });
};

const PercentContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled('div')`
  & * {
    transition: none;
  }
`;

const useDebouncePieChartData = (data: PercentPieChartData[], highlightIndex: number, debounce: number = 325) => {
    const mergedData = useMemo((): [PercentPieChartData, PercentPieChartData] => [data[highlightIndex], mergeDataExcept(highlightIndex, data)], [data, highlightIndex]);
    const [highlighted, rest] = mergedData;

    const [chartData, setChartData] = useState<PercentPieChartData[]>([
        { ...highlighted, value: 0 },
        { ...rest },
    ]);

    useEffect(() => {
        setChartData([
            { ...mergedData[0], value: 0 },
            { ...mergedData[1], value: mergedData[0].value + mergedData[1].value },
        ]);
        const timeout = setTimeout(() => {
            setChartData(mergedData);
        }, debounce);

        return () => {
            clearTimeout(timeout);
        };
    }, [mergedData, debounce]);

    return {
        chartData,
        highlightedCount: highlighted.value,
        totalCount: highlighted.value + rest.value,
    };
};

const PercentPieChart = ({ data, highlightIndex = 0, color = 'blue', size = 6 }: PercentPieChartProps) => {
    const { isDark, theme } = useThemeMode();
    const { chartData, highlightedCount, totalCount } = useDebouncePieChartData(data, highlightIndex, 250);

    return (
        <Container>
            <Box position={'relative'} width={`${size}rem`} height={`${size}rem`}>
                <PercentContainer>
                    <Fade in timeout={1000}>
                        <div>
                            <Percent color={color} value={highlightedCount} total={totalCount} />
                        </div>
                    </Fade>
                </PercentContainer>
                <Pie width={16 * size} height={16 * size}
                     data={chartData}
                     innerRadius={0.72}
                     padAngle={2}
                     animate={true}
                     motionConfig={'stiff'}
                     cornerRadius={16}
                     enableArcLinkLabels={false}
                     isInteractive={false}
                     colors={[`${theme.palette[color][600]}`, `${isDark ? theme.palette.gray[900] : theme.palette.gray[100]}`]}
                     arcLabel={''}
                />
            </Box>
        </Container>
    );
};

export default PercentPieChart;