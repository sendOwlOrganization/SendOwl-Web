export enum BoardCategory {
    FREE = 1,
    CAREER = 2,
    STUDY = 3,
    INTERVIEW = 4,
    JOB = 5,
}

const BOARD_CATEGORY_NAMES: Record<BoardCategory, string> = {
    [BoardCategory.FREE]: '자유 게시판',
    [BoardCategory.CAREER]: '이직, 커리어',
    [BoardCategory.STUDY]: '스터디',
    [BoardCategory.INTERVIEW]: '면접 후기',
    [BoardCategory.JOB]: '채용',
};

export const getBoardCategoryName = (category: BoardCategory): string => BOARD_CATEGORY_NAMES[category];