export default interface TestCase<T extends (...args: any) => any> {
    inputs: Parameters<T>;
    expected: ReturnType<T>;
}