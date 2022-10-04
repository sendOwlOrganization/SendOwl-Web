import { SetProfile } from '@api/types/user/SetProfile';
import fetch from 'node-fetch';
import { BoardDetails, BoardsResponse } from './types/boards';
import { Category, PopularCategory } from './types/category';
import HttpStatusCode from './types/HttpStatusCode';

interface FetchError {
    code: number;
    message?: string;
}

interface FetchResponse<T> {
    data: T | null;
    error: FetchError | null;
}

const fetchSendOwlApi = async <T extends unknown>(
    endpoint: string,
    init?: Parameters<typeof fetch>[1],
): Promise<FetchResponse<T>> => {
    try {
        const API_URL = process.env.NEXT_PUBLIC_SENDOWL_API_URL;
        const data = await fetch(`${API_URL}/api/${endpoint}`, init);
        if (data.ok) {
            const response: T = await data.json();

            return {
                data: response,
                error: null,
            };
        } else {
            return {
                data: null,
                error: {
                    code: data.status,
                },
            };
        }
    } catch (e: unknown) {
        return {
            data: null,
            error: {
                code: HttpStatusCode.INTERNAL_SERVER_ERROR,
            },
        };
    }
};

export const getBoards = async (
    categoryId: number,
    page: number,
    pageSize: number,
): Promise<FetchResponse<BoardsResponse>> =>
    await fetchSendOwlApi<BoardsResponse>(
        `boards?categoryId=${categoryId}&page=${page}&size=${pageSize}&sort=id,DESC`,
    );

export const getBoardDetails = async (
    id: number,
): Promise<FetchResponse<BoardDetails>> =>
    await fetchSendOwlApi<BoardDetails>(`boards/${id}`);

export const getCategories = async (): Promise<FetchResponse<Category[]>> =>
    await fetchSendOwlApi<Category[]>(`categories`);

export const getPopularCategories = async (): Promise<FetchResponse<PopularCategory[]>> =>
    await fetchSendOwlApi<PopularCategory[]>('categories/popular');

export const setProfile = async (
    profile: SetProfile, token: string,
) => await fetchSendOwlApi<{}>(`users/set-profile`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(profile),
});