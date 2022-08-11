import { ResponsivePie } from '@nivo/pie'
import {MLAB_PALETTE} from "@styles/sendOwlTheme";

const MyResponsivePie = ({ data }: any) => (
    <ResponsivePie
        data={data}
        margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        }}
        arcLabel={
            function(e):any {
                let data = e.value
                if (data == 0) {
                    return
                } else {
                    return e.label
                }
            }
        }
        innerRadius={0.5}
        padAngle={3}
        cornerRadius={3}
        enableArcLinkLabels={false}
        colors={[`${MLAB_PALETTE.violet}`, `${MLAB_PALETTE.blue}`, `${MLAB_PALETTE.orange}`, `${MLAB_PALETTE.green}`]}
        sortByValue={true}
        />
)

export default MyResponsivePie;