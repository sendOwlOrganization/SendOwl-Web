import fetch from 'node-fetch';
import { BoardDetails, BoardsResponse } from './types/boards';
import { Category } from './types/category';
import HttpStatusCode from './types/HttpStatusCode';
import { ResponseDto } from './types/ResponseDto';

const API_URL = process.env.SENDOWL_API_URL;

interface FetchError {
    code: number;
    message?: string;
}

interface FetchResponse<T> {
    data: T | null;
    error: FetchError | null;
}

const fetchSendOwlApi = async <T extends unknown>(endpoint: string, init?: Parameters<typeof fetch>[1]): Promise<FetchResponse<T>> => {
    try {
        const data = await fetch(`${API_URL}/api/${endpoint}`, init);
        if (data.ok) {
            const { response }: ResponseDto<T> = await data.json();
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

export const getBoards = async (page: number, pageSize: number): Promise<FetchResponse<BoardsResponse>> =>
    await fetchSendOwlApi<BoardsResponse>(`boards?page=${page}&size=${pageSize}&sort=id,DESC`);

export const getBoardDetails = async (id: number): Promise<FetchResponse<BoardDetails>> =>
    await fetchSendOwlApi<BoardDetails>(`boards/${id}`);

export const getCategories = async (): Promise<FetchResponse<Category[]>> =>
    await fetchSendOwlApi<Category[]>(`categories`);