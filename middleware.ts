import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';


export const middleware = async (request: NextRequest) => {
    const response = NextResponse.next();
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
        return response;
    }

    // handle redirect to set profile
    console.log('handle redirect to set profile');

    return response;
};

export const config = {
    matcher: ['/:path*'],
};