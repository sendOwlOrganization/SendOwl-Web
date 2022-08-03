import { ResponsivePie } from '@nivo/pie'
import {MLAB_PALETTE} from "../../../../styles/sendOwlTheme";

export const data = [
    {
        "id": "카테고리",
        "label": "카테고리",
        "value": 184,
        "color": MLAB_PALETTE.blue
    },
    {
        "id": "짤방",
        "label": "짤방",
        "value": 123,
        "color": MLAB_PALETTE.orange
    },
    {
        "id": "연애",
        "label": "연애",
        "value": 287,
        "color": MLAB_PALETTE.green
    },
    {
        "id": "대화방",
        "label": "대화방",
        "value": 445,
        "color": MLAB_PALETTE.violet
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