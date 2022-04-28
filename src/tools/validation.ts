import { ValidationRule } from 'react-hook-form';

type ValidationField = 'email' | 'name' | 'password'
export const validationRegex: Record<ValidationField, ValidationRule<RegExp>> = {
    email: {
        // source: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
        value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: '올바른 이메일 주소를 입력해주세요',
    },
    name: {
        value: /^[가-힣]{2,4}$/,
        message: '이름은 2 ~ 4자의 한글이여야 합니다',
    },
    password: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/,
        message: '비밀번호는 하나 이상의 대문자, 소문자, 숫자 및 특수 문자로 이루어진 6 ~ 10자이여야 합니다',
    },
};