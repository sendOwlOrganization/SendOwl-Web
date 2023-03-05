export namespace ObjectUtil {
    /**
     * 객체를 플랫하게 만드는 함수
     * @example
     * {
     *      foo: { bar: { baz: 42 } },
     *      hello: 'world'
     * }
     * =>
     * { foo_bar_baz: 42, hello: 'world' }
     * @param obj 플랫 할 객체
     * @param separator 새로운 키에 쓰일 separator
     */
    export const flattenObject = ({
        obj,
        separator = '_',
    }: {
        obj: object;
        separator?: string;
    }): Record<string, any> => {
        const flatten: Record<string, any> = {};

        const flattenRec = (obj: object, prefix: string) => {
            Object.entries(obj).forEach(([k, v]) => {
                const key = prefix ? `${prefix}${separator}${k}` : k;
                if (typeof v === 'object') {
                    flattenRec(v, key);
                } else if (typeof v === 'string' || typeof v === 'number') {
                    flatten[key] = v;
                }
            });
        };

        flattenRec(obj, '');

        return flatten;
    };

    /**
     * 객체에 플랫된 필드이름을 assign 하는 함수
     * @example
     * { foo: { bar: 'test' }, baz: 'hello' } => { foo: { bar: 'foo_bar' }, baz: 'baz' }
     * @param obj
     * @param separator
     * @param transformer
     */
    export const assignFlattenKey = <T extends object>({
        obj,
        separator = '_',
        transformer = (v) => v,
    }: {
        obj: T;
        separator?: string;
        transformer?: (key: string) => string;
    }): T => {
        const assignFlatten = (obj: T, prefix: string) => {
            Object.entries(obj).forEach(([k, v]) => {
                const key = prefix ? `${prefix}${separator}${k}` : k;
                if (typeof v === 'object') {
                    assignFlatten(v, key);
                } else if (typeof v === 'string' || typeof v === 'number') {
                    // @ts-ignore
                    obj[k] = transformer(key);
                }
            });
        };

        assignFlatten(obj, '');
        return obj;
    };
}
