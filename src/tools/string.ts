export type HighlightArray = { word: string, highlighted: boolean }[]

export const highlight = (text: string, query: string): HighlightArray => {
    const queries = query.replaceAll(/[^a-zA-Z0-9ㄱ-ㅎ가-힣]/g, ' ')
        .split(' ')
        .filter(q => !!q);
    const words = text.replace(new RegExp(`(${[...new Set(queries)].join('|')})`, 'gi'), '~$1~')
        .split(new RegExp(`(~[^~]+~)`, 'gi'))
        .filter(w => !!w)
        .map(w => ({ word: w.replaceAll('~', ''), highlighted: w.startsWith('~') }));
    return words;
};