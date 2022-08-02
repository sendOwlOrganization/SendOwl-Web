import { I18nConfig } from '@editorjs/editorjs';

export const i18nKorean: I18nConfig = {
    messages: {
        ui: {
            toolbar: {
                toolbox: {
                    'Add': '추가',
                    'Filter': '필터',
                    'Nothing found': '검색된 항목이 없습니다',
                    'Move down': '아래로 이동',
                    'Click to tune': '수정',
                },
            },
            blockTunes: {
                toggler: {
                    'Click to tune': '수정',
                    'or drag to move': '드래그하여 이동',
                },
            },
            inlineToolbar: {
                converter: {
                    'Convert to': '변환',
                },
            },
        },
        blockTunes: {
            'delete': {
                'Delete': '삭제',
            },
            'moveUp': {
                'Move up': '위로 이동',
            },
            'moveDown': {
                'Move down': '아래로 이동',
            },
        },
        toolNames: {
            'Text': '텍스트',
            'Table': '표',
            'List': '리스트',
            'Heading': '제목',
            'Checklist': '체크 리스트',
            'Delimiter': '구분문자',
            'Link': '링크',
            'Bold': '굵게',
            'Italic': '기울기',
            'InlineCode': '코드',
            'Marker': '하이라이트',
        },
        tools: {
            'quote': {
                'Enter a quote': '내용',
            },
            'table': {
                'Add column to left': '왼쪽에 열 삽입',
                'Add column to right': '오른쪽에 열 삽입',
                'Delete column': '열 삭제',
                'Add row to left': '왼쪽에 행 삽입',
                'Add row to right': '오른쪽에 행 삽입',
                'Delete row': '행 삭제',
            },
            'list': {

                'Unordered': '기호 목록',
                'Ordered': '번호 목록',
            },
        },
    },
};