import { LoginDetail } from '@api/types/LoginDetail';
import { UserMeResponse, UsersSetProfileResponse } from '@api/types/users';
import fetch from 'node-fetch';
import { BoardDetails, BoardPost, BoardsResponse } from './types/boards';
import { Category, PopularCategory } from './types/category';
import HttpStatusCode from './types/HttpStatusCode';

interface FetchError {
    code: number;
    message?: string;
}

interface FetchResponse<T> {
    data: T | null;
    headers: Record<string, string> | null;
    error: FetchError | null;
}

const fetchSendOwlApi = async <T extends unknown>(
    endpoint: string,
    init?: Parameters<typeof fetch>[1]
): Promise<FetchResponse<T>> => {
    try {
        const API_URL = process.env.NEXT_PUBLIC_SENDOWL_API_URL;
        const data = await fetch(`${API_URL}/api/${endpoint}`, init);
        if (data.ok) {
            const response: T = await data.json();
            const headers: Record<string, string> = Object.fromEntries(data.headers.entries());

            return {
                data: response,
                headers,
                error: null,
            };
        } else {
            return {
                data: null,
                headers: null,
                error: {
                    code: data.status,
                },
            };
        }
    } catch (e: unknown) {
        return {
            data: null,
            headers: null,
            error: {
                code: HttpStatusCode.INTERNAL_SERVER_ERROR,
            },
        };
    }
};
export const getPreviewBoards = async (
    categoryId: number,
    textLength: number,
    page: number,
    pageSize: number
): Promise<FetchResponse<BoardsResponse>> =>
    await fetchSendOwlApi<BoardsResponse>(
        `boards/preview?categoryId=${categoryId}&titleLength=${textLength}&page=${page}&size=${pageSize}&sort=reg_date,DESC`
    );

export const getBoards = async (
    categoryId: number,
    textLength: number,
    page: number,
    pageSize: number
): Promise<FetchResponse<BoardsResponse>> =>
    await fetchSendOwlApi<BoardsResponse>(
        `boards?categoryId=${categoryId}&page=${page}&textLength=${textLength}&size=${pageSize}&sort=id,DESC`
    );
export const getBoardDetails = async (
    id: number,
    init?: Parameters<typeof fetch>[1]
): Promise<FetchResponse<BoardDetails>> => await fetchSendOwlApi<BoardDetails>(`boards/${id}`, init);

export const getCategories = async (): Promise<FetchResponse<Category[]>> =>
    await fetchSendOwlApi<Category[]>(`categories`);

export const getPopularCategories = async (): Promise<FetchResponse<PopularCategory[]>> =>
    await fetchSendOwlApi<PopularCategory[]>('categories/popular');

export const postBoardDetails = async (board: BoardPost, token: string) =>
    await fetchSendOwlApi<any>(`boards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(board),
    });

export const postOauth2 = async (accessToken: string, provider: string) =>
    await fetchSendOwlApi<LoginDetail>(`users/oauth2`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            transactionId: provider,
            token: accessToken,
        }),
    });

export const postSetProfile = async (
    profile: { mbti: string; gender: string; age: number; nickName: string },
    token: string
) =>
    await fetchSendOwlApi<UsersSetProfileResponse>(`users/set-profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(profile),
    });

export const getMe = async (token: string) =>
    await fetchSendOwlApi<UserMeResponse>(`users/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
