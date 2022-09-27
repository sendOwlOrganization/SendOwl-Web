import { API_URL } from '@tools/url';
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
            const response = await fetch(`${API_URL}/api/users/oauth2`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    transactionId: account?.provider,
                    token: account?.access_token,
                }),
            });

            if (!response.ok) {
                // console.error(response);
            }
            const { alreadyJoined } = await response.json();
            token.accessToken = response.headers.get('accessToken');

            if (!alreadyJoined) {
                const profileResponse = await fetch(`${API_URL}/api/users/set-profile`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.accessToken}`,
                    },
                    body: JSON.stringify({
                        nickName: profile?.name,
                        mbti: MBTI_LIST[Math.floor(Math.random() * (MBTI_LIST.length - 1))],
                    }),
                });

            }

            return token;
        },
        async session({ session, token }) {
            const { accessToken } = token;
            session.token = accessToken;
            return session;
        },
    },
});