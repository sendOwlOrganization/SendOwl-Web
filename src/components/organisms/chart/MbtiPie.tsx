import {ComputedDatum, ResponsivePie} from '@nivo/pie'
import {MLAB_PALETTE} from "@styles/sendOwlTheme";

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
        arcLabel={'id'}
        innerRadius={0.5}
        padAngle={3}
        cornerRadius={3}
        enableArcLinkLabels={false}
        colors={{scheme: 'pastel1'}}
        sortByValue={true}
        />
)

export default MyResponsivePie;