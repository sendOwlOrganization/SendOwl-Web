import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        NaverProvider({
            clientId: process.env.NAVER_ID,
            clientSecret: process.env.NAVER_SECRET,
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_ID,
            clientSecret: process.env.KAKAO_SECRET,
        }),
    ],
    theme: {
        colorScheme: 'light',
    },
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user, isNewUser, account, profile }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.token = token;
            return session;
        },
    },
});