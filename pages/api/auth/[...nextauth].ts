import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';
import fetch from 'node-fetch';

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
            if (!account) {
                return token;
            }
            // backend call
            const body = {
                transactionId: account?.provider,
                token: account?.access_token,
            };
            console.log({ account, body });
            const response = await fetch(`${process.env.NEXT_PUBLIC_SENDOWL_API_URL}/api/users/oauth2`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                // console.error(response);
            }

            token.accessToken = response.headers.get('accessToken');


            return token;
        },
        async session({ session, token }) {
            const { accessToken } = token;
            session.token = accessToken;
            return session;
        },
    },
});