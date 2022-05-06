import { Pageable } from './Pageable';

export interface PagedResponse {
    totalElement: number;
    totalPages: number;
    pageable: Pageable;
}