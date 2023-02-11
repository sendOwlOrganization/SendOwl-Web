import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

const middlewares: Record<string, typeof middleware> = {
    ['/login/verify']: async (req) => {
        const accessToken: string | undefined = req.nextauth.token?.accessToken;
        if (!accessToken) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
        return NextResponse.next();
    },
    ['/register']: async (req) => {
        const accessToken: string | undefined = req.nextauth.token?.accessToken;
        if (!accessToken) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
        return NextResponse.next();
    },
};

async function middleware(req: NextRequestWithAuth): Promise<NextResponse> {
    const handler = middlewares[req.nextUrl.pathname];
    return handler ? await handler(req) : NextResponse.next();
}

export const config = {
    matcher: ['/login/:path*', '/register/:path*'],
};

export default withAuth(middleware, {
    callbacks: {
        authorized: ({}) => true,
    },
});
