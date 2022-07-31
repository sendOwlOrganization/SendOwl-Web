declare namespace NodeJS {
    export interface ProcessEnv {
        NEXTAUTH_URL: string;
        NEXTAUTH_SECRET: string;
        APPLE_ID: string;
        APPLE_SECRET: string;
        FACEBOOK_ID: string;
        FACEBOOK_SECRET: string;
        KAKAO_ID: string;
        KAKAO_SECRET: string;
        GOOGLE_ID: string;
        GOOGLE_SECRET: string;
        NAVER_ID: string;
        NAVER_SECRET: string;
        INSTAGRAM_ID: string;
        INSTAGRAM_SECRET: string;
    }
}