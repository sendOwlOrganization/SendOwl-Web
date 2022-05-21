import TestCase from '../types/TestCase';
import { formatDate } from './date';

const now = new Date('2022-05-01T12:00:00');

beforeAll(() => {
    jest.useFakeTimers().setSystemTime(now);
});

afterAll(() => {
    jest.useRealTimers();
});

const testCasesMapping: { name: string, testCases: TestCase<typeof formatDate>[] }[] = [
    {
        name: 'when difference is more than 7 days',
        testCases: [
            {
                inputs: ['2022-03-05'],
                expected: '2022. 3. 5.',
            },
            {
                inputs: ['2022-04-22'],
                expected: '2022. 4. 22.',
            },
            {
                inputs: ['2022-04-23'],
                expected: '2022. 4. 23.',
            },
        ],
    },
    {
        name: 'when difference is between 2 days and 7 days',
        testCases: [
            {
                inputs: ['2022-04-24T12:00:00'],
                expected: '7일 전',
            },
            {
                inputs: ['2022-04-25T00:52:00'],
                expected: '6일 전',
            },
            {
                inputs: ['2022-04-26T05:12:52'],
                expected: '5일 전',
            },
            {
                inputs: ['2022-04-27T12:00:00'],
                expected: '4일 전',
            },
            {
                inputs: ['2022-04-28T10:00:12'],
                expected: '3일 전',
            },
            {
                inputs: ['2022-04-29T11:42:42'],
                expected: '2일 전',
            },
        ],
    },
    {
        name: 'when difference is between 24 hours and 2 days',
        testCases: [
            {
                inputs: ['2022-04-30T05:00:00'],
                expected: '어제',
            },
            {
                inputs: ['2022-04-30T11:59:59'],
                expected: '어제',
            },
        ],
    },
    {
        name: 'when difference is between 1 hour and 24 hours',
        testCases: [
            {
                inputs: ['2022-04-30T12:10:00'],
                expected: '23시간 전',
            },
            {
                inputs: ['2022-04-30T16:10:00'],
                expected: '19시간 전',
            },
            {
                inputs: ['2022-05-01T11:00:00'],
                expected: '1시간 전',
            },
        ],
    },
    {
        name: 'when difference is 1 hour or less',
        testCases: [
            {
                inputs: ['2022-05-01T11:00:01'],
                expected: '59분 전',
            },
            {
                inputs: ['2022-05-01T11:30:00'],
                expected: '30분 전',
            },
            {
                inputs: ['2022-05-01T12:00:00'],
                expected: '0분 전',
            },
        ],
    },
];

describe(`formatDate (now is '${now.toISOString()}')`, () => {
    describe.each(testCasesMapping)('$name', ({ testCases }) => {
        test.each(testCases)('$inputs should returns $expected', ({ inputs, expected }) => {
            const result = formatDate(...inputs);
            expect(result).toEqual(expected);
        });
    });
});