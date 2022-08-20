import { ResponsivePie } from '@nivo/pie'
import {MLAB_PALETTE} from "@styles/sendOwlTheme";

export const data = [
    {
        "id": "ENTP",
        "label": "ENTP",
        "value": 184,
        "color": MLAB_PALETTE.skyBlue
    },
    {
        "id": "rest",
        "label": "rest",
        "value": 1000,
        "color": MLAB_PALETTE.grey9
    },
]
const MyResponsivePie = ({ data }: any) => (
    <ResponsivePie
        data={data}
        margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        }}
        innerRadius={0.5}
        padAngle={3}
        cornerRadius={3}
        enableArcLinkLabels={false}
        colors={{scheme: 'pastel1'}}
        arcLabel={'id'}
        sortByValue={true}
    />
)

export default MyResponsivePie;