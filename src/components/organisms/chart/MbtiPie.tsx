import {ComputedDatum, ResponsivePie} from '@nivo/pie'
import {MLAB_PALETTE} from "@styles/sendOwlTheme";

export const data = [
    {
        "id": "ENTP",
        "label": "ENTP",
        "value": 184,
        "color": MLAB_PALETTE.pink
    },
    {
        "id": "rest",
        "label": "rest",
        "value": 1000,
        "color": MLAB_PALETTE.grey9
    },
]

interface DataList {
    id: number;
    name: string;
    count: number;
}

interface Data {
    data: DataList[]
}

const MyResponsivePie = ({ data }: any) => (
    <ResponsivePie
        data={data}
        margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        }}
        arcLabel={''}
        innerRadius={0.5}
        padAngle={3}
        cornerRadius={3}
        enableArcLinkLabels={false}
        colors={[`${MLAB_PALETTE.pink}`, `${MLAB_PALETTE.grey9}`]}
        sortByValue={true}
        />
)

export default MyResponsivePie;