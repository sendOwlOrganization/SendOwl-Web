import { ResponsivePie } from '@nivo/pie'
import {MLAB_PALETTE} from "@styles/sendOwlTheme";
import {PropsWithChildren} from "react";
import {Grid} from "@mui/material";

interface MbtiData {
    id: string,
    label: string,
    value: number,
}
interface MbtiDataProps {
    data: MbtiData[]
}

const MbtiBanner = ({data}: MbtiDataProps) => (
    <ResponsivePie
        data={data}
        innerRadius={0.72}
        padAngle={2}
        cornerRadius={16}
        enableArcLinkLabels={false}
        isInteractive={false}
        colors={[`${MLAB_PALETTE.lightPink}`, `${MLAB_PALETTE.grey8}`]}
        arcLabel={''}
    />
)

export default MbtiBanner;
