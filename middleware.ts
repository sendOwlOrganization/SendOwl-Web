import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    if (request.nextUrl.pathname === '/register' && !token) {
        const home = request.nextUrl.clone();
        home.pathname = '/';
        return NextResponse.redirect(home);
    }

    if (!token || token.alreadySetted || request.nextUrl.pathname.startsWith('/register')) {
        return NextResponse.next();
    }

    const registerUrl = request.nextUrl.clone();
    registerUrl.pathname = '/register';
    return NextResponse.redirect(registerUrl);
};

export const config = {
    matcher: ['/((?!api|_next|static).*)'],
};