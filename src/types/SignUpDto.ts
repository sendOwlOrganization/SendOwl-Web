export interface SignUpDto {
    email: string;
    nickName: string;
    name: string;
    password: string;
    passwordConfirm: string;
    introduction: string;
    profileImage: string;
}

export const defaultSignUpDto: Readonly<SignUpDto> = {
    email: '',
    name: '',
    nickName: '',
    password: '',
    passwordConfirm: '',
    introduction: '',
    profileImage: '',
};
