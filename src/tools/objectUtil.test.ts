import { ObjectUtil } from '@tools/objectUtil';

describe('ObjectUtil', () => {
    describe('flattenObject', () => {
        it('should ignore non string/number property', () => {
            const given = {
                test: 1,
                foo: 'bar',
                hello: true,
                func: () => 'hi',
            };

            const result = ObjectUtil.flattenObject({ obj: given });

            const expected = {
                test: '1',
                foo: 'bar',
            };
            expect(result).toEqual(expected);
        });

        it('should flat simple nested object with separator', () => {
            const given = {
                hello: 1,
                my: {
                    test: 2,
                    is: 3,
                },
                foo: {
                    bar: '42',
                    hey: {
                        test: 'go',
                    },
                },
            };

            const result = ObjectUtil.flattenObject({ obj: given });

            const expected = {
                hello: '1',
                my_test: '2',
                my_is: '3',
                foo_bar: '42',
                foo_hey_test: 'go',
            };
            expect(result).toEqual(expected);
        });
    });

    describe('assignFlattenKey', () => {
        it('should assign created key', () => {
            const given = {
                test: '',
                foo: {
                    bar: '',
                    baz: {
                        hey: '',
                    },
                },
            };

            const result = ObjectUtil.assignFlattenKey({ obj: given });

            const expected = {
                test: 'test',
                foo: {
                    bar: 'foo_bar',
                    baz: {
                        hey: 'foo_baz_hey',
                    },
                },
            };
            expect(result).toEqual(expected);
        });

        it('should use transformer when given', () => {
            const given = {
                test: '',
            };
            const transformer = (v: string | number) => `hello(${v})`;

            const result = ObjectUtil.assignFlattenKey({ obj: given, transformer });

            const expected = {
                test: 'hello(test)',
            };
            expect(result).toEqual(expected);
        });
    });
});