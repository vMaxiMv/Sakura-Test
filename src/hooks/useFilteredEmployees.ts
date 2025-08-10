import { IEmployee } from '@/types/employee';
import { useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';

export function useFilteredEmployees(employees: IEmployee[]) {
    const [departmentFilter, setDepartmentFilter] = useState<string>('All');
    const [searchPerson, setSearchPerson] = useState<string>('');
    const [debounceSearchPerson] = useDebounce(searchPerson, 300);

    const filterEmployees = useMemo(() => {
        const result =
            departmentFilter === 'All' ? employees : employees.filter(emp => emp.department === departmentFilter);
        if (!debounceSearchPerson.trim()) return result;
        return result.filter(emp => emp.name.toLowerCase().includes(debounceSearchPerson.toLowerCase()));
    }, [employees, departmentFilter, debounceSearchPerson]);

    const departments = useMemo(() => {
        return [...new Set(employees.map(dep => dep.department))];
    }, [employees]);
    return {
        filteredEmployees: filterEmployees,
        departments,
        departmentFilter,
        setDepartmentFilter,
        searchPerson,
        setSearchPerson,
    };
}
