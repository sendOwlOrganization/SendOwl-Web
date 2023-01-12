import CommunityIcon from "@components/icons/CommunityIcon";
import BalanceGameIcon from "@components/icons/BalanceGameIcon";
import InsightIcon from "@components/icons/InsightIcon";
import NoticeIcon from "@components/icons/NoticeIcon";
import {MLAB_PALETTE} from "@styles/mlabTheme";

export const communityList = {
    community: {
        id: 1,
        name: "커뮤니티",
        icon: CommunityIcon,
        color: 'pink'
    },
    balanceGame: {
        id: 2,
        name: "밸런스게임",
        icon: BalanceGameIcon,
        color: 'purple'
    },
    insight: {
        id : 3,
        name : "인사이트",
        icon: InsightIcon,
        color: 'blue'
    },
    serviceCenter: {
        id : 4,
        name : "고객센터",
        icon: NoticeIcon,
        color: 'yellow'
    }
} as const;