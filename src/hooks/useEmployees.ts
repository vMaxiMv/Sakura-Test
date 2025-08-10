import { useEmployeesData } from './useEmployeesData';
import { useFilteredEmployees } from './useFilteredEmployees';
import { usePagination } from './usePagination';
import { useSortedEmployees } from './useSortedEmployees';

export function useEmployees() {
    const { employees, loading, error } = useEmployeesData();
    const { filteredEmployees, departmentFilter, setDepartmentFilter, searchPerson, setSearchPerson, departments } =
        useFilteredEmployees(employees);
    const { sortedEmployees, sortDescriptor, setSortDescriptor } = useSortedEmployees(filteredEmployees);
    const { paginated, page, setPage, totalPages } = usePagination(sortedEmployees, 10);

    const handleFilterChange = <T>(value: T, setValue: (v: T) => void) => {
        setValue(value);
        setPage(1);
    };

    return {
        employees: paginated,
        loading,
        error,
        departments,
        departmentFilter,
        setDepartmentFilter,
        searchPerson,
        setSearchPerson,
        sortDescriptor,
        setSortDescriptor,
        page,
        setPage,
        totalPages,
        handleFilterChange,
    };
}
