import { ArrowBlockRight, ArrowBlockLeft } from '@untitledui/icons';
import { cn } from '@/utils/utils';
import { useMemo } from 'react';

interface PaginationProps {
    align?: 'left' | 'center' | 'right';
    page: number;
    total: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export function PaginationCardMinimal({ align = 'center', page, total, onPageChange, className }: PaginationProps) {
    const goToPage = (newPage: number) => {
        if (newPage >= 1 && newPage <= total) {
            onPageChange(newPage);
        }
    };
    const pageNumbers = useMemo(() => {
        const prevBtns = Math.max(1, page - 4);
        const nextBtns = Math.min(total, page + 4);
        return Array.from({ length: nextBtns - prevBtns + 1 }, (_, i) => prevBtns + i);
    }, [page, total]);

    return (
        <div
            className={cn(
                'flex items-center',
                align === 'left' && 'justify-start',
                align === 'center' && 'justify-center',
                align === 'right' && 'justify-end',
                className
            )}
        >
            <nav className="inline-flex items-center gap-2" aria-label="Pagination">
                <button
                    onClick={() => goToPage(page - 1)}
                    disabled={page === 1}
                    className={cn(
                        'p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
                    )}
                >
                    <ArrowBlockLeft className="h-4 w-4" />
                </button>
                {pageNumbers.map(num => (
                    <button
                        key={num}
                        onClick={() => goToPage(num)}
                        className={cn(
                            'px-3 py-1 rounded-md border border-gray-300 bg-white hover:bg-gray-50',
                            num === page && 'bg-blue-500 text-white  hover:bg-blue-600'
                        )}
                    >
                        {num}
                    </button>
                ))}
                <button
                    onClick={() => goToPage(page + 1)}
                    disabled={page === total}
                    className={cn(
                        'p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
                    )}
                >
                    <ArrowBlockRight className="h-4 w-4" />
                </button>
            </nav>
        </div>
    );
}
