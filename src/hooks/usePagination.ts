import { useMemo, useState } from 'react';

export function usePagination<T>(items: T[], pageSize: number) {
    const [page, setPage] = useState(1);

    const paginated = useMemo(() => {
        const start = (page - 1) * pageSize;
        return items.slice(start, start + pageSize);
    }, [items, page, pageSize]);

    const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

    return { paginated, page, setPage, totalPages };
}
