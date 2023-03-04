export namespace ObjectUtil {
    export const flattenObject = ({
        obj,
        separator = '_',
        transformer = (k) => k,
    }: {
        obj: object;
        separator?: string;
        transformer?: (key: string) => string;
    }): Record<string, string> => {
        const flatten: Record<string, string> = {};

        const flattenRec = (obj: object, prefix: string) => {
            Object.entries(obj).forEach(([k, v]) => {
                const key = prefix ? `${prefix}${separator}${k}` : k;
                if (typeof v === 'object') {
                    flattenRec(v, key);
                }
                if (typeof v === 'string' || typeof v === 'number') {
                    flatten[transformer(key)] = v.toString();
                }
            });
        };

        flattenRec(obj, '');

        return flatten;
    };

    export const assignFlattenKey = ({
        obj,
        separator = '_',
        transformer = (v) => v.toString(),
    }: {
        obj: object;
        separator?: string;
        transformer?: (value: string | number) => string;
    }): object => {
        const assignFlatten = (obj: object, prefix: string) => {
            Object.entries(obj).forEach(([k, v]) => {
                const key = prefix ? `${prefix}${separator}${k}` : k;
                if (typeof v === 'object') {
                    assignFlatten(v, key);
                }
                if (typeof v === 'string' || typeof v === 'number') {
                    // @ts-ignore
                    obj[k] = transformer(key);
                }
            });
        };

        assignFlatten(obj, '');
        return obj;
    };
}
