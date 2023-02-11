import { Session as NextAuthSession } from 'next-auth';
import { DefaultJWT as NextAuthDefaultJWT } from 'next-auth/jwt';

export declare module 'next-auth' {
    export interface Session extends NextAuthSession {
        accessToken: string;
        provider: string;
    }
}

export declare module 'next-auth/jwt' {
    export interface DefaultJWT extends NextAuthDefaultJWT {
        accessToken: string;
        provider: string;
    }
}
