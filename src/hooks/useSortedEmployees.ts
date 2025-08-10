import { IEmployee } from '@/types/employee';
import { useMemo, useState } from 'react';
import { SortDescriptor } from 'react-aria-components';

export function useSortedEmployees(employees: IEmployee[]) {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();

    const sorted = useMemo(() => {
        if (!sortDescriptor) return employees;
        return [...employees].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof IEmployee];
            const second = b[sortDescriptor.column as keyof IEmployee];
            if (typeof first === 'number' && typeof second === 'number') {
                return sortDescriptor.direction === 'descending' ? second - first : first - second;
            }
            if (typeof first === 'string' && typeof second === 'string') {
                let cmp = first.localeCompare(second, 'ru');
                if (sortDescriptor.direction === 'descending') cmp *= -1;
                return cmp;
            }
            return 0;
        });
    }, [employees, sortDescriptor]);

    return { sortedEmployees: sorted, sortDescriptor, setSortDescriptor };
}
