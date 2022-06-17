import { OutputBlockData } from '@editorjs/editorjs';

export const blocksMock: OutputBlockData[] = [
    {
        'id': 'dzOTjhsaB6',
        'type': 'header',
        'data': {
            'text': 'Editor.js',
            'level': 2,
        },
    },
    {
        'id': 'vIp8VxHyp2',
        'type': 'paragraph',
        'data': {
            'text': 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
        },
    },
    {
        'id': 'JkGjGkWu4Q',
        'type': 'header',
        'data': {
            'text': 'Key features',
            'level': 3,
        },
    },
    {
        'id': '39K0DpgmSO',
        'type': 'list',
        'data': {
            'style': 'unordered',
            'items': [
                'It is a block-styled editor',
                'It returns clean data output in JSON',
                'Designed to be extendable and pluggable with a simple API',
            ],
        },
    },
];
