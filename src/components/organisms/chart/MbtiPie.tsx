import {ComputedDatum, ResponsivePie} from '@nivo/pie'
import {MLAB_PALETTE} from "@styles/sendOwlTheme";

<<<<<<< HEAD
interface DataList {
    id: number;
    name: string;
    count: number;
}

interface Data {
    data: DataList[]
}

=======
>>>>>>> main
const MyResponsivePie = ({ data }: any) => (
    <ResponsivePie
        data={data}
        margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        }}
<<<<<<< HEAD
        arcLabel={'id'}
=======
        arcLabel={'label'}
>>>>>>> main
        innerRadius={0.5}
        padAngle={3}
        cornerRadius={3}
        enableArcLinkLabels={false}
<<<<<<< HEAD
        colors={{scheme: 'pastel1'}}
=======
        colors={[`${MLAB_PALETTE.violet}`, `${MLAB_PALETTE.blue}`, `${MLAB_PALETTE.orange}`, `${MLAB_PALETTE.green}`]}
>>>>>>> main
        sortByValue={true}
        isInteractive={false}
        />
)

export default MyResponsivePie;