import { getGoogleLoginDetails } from '@api/index';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
    async function middleware(request: NextRequestWithAuth) {
        const accessToken: string = request.nextauth?.token?.accessToken as string;
        if (accessToken && request.page.name?.startsWith('/login')) {
            const loginDetail = await getGoogleLoginDetails(accessToken);
            if (!loginDetail.data?.alreadySetted) {
                return NextResponse.redirect(new URL('/register/mbti', request.url));
            } else {
                return NextResponse.redirect(new URL('/', request.url));
            }
        } else if (!accessToken && request.page.name?.startsWith('/register')) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({}) => true,
        },
    }
);

export const config = {
    matcher: ['*'],
};
