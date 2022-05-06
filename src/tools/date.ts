const TimeConstants = {
    MINUTES_IN_HOUR: 60,
    HOURS_IN_DAY: 24,
    MILLISECONDS_IN_DAY: 24 * 60 * 60 * 1000,
} as const;

const getDayDiff = (date1: Date, date2: Date): number => {
    const diff = date1.getTime() - date2.getTime();
    return diff / TimeConstants.MILLISECONDS_IN_DAY;
};

export const formatDate = (datetime: string): string => {
    const date = new Date(datetime);
    const now = new Date();
    const dayDiff = getDayDiff(now, date);
    if (dayDiff > 7) {
        return date.toLocaleDateString('ko-KR');
    }
    if (dayDiff >= 2) {
        return `${dayDiff}일 전`;
    }
    if (dayDiff >= 1) {
        return '어제';
    }
    const hourDiff = dayDiff * TimeConstants.HOURS_IN_DAY;
    if (hourDiff >= 1) {
        return `${Math.ceil(hourDiff)}시간 전`;
    }
    const minuteDiff = hourDiff * TimeConstants.MINUTES_IN_HOUR;
    return `${Math.floor(minuteDiff)}분 전`;

};