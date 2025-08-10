import { FilterSelect } from '../FilterSelect/FilterSelect';
import { SearchInput } from '../SearchInput/SearchInput';

export function TableControls({
    searchPerson,
    setSearchPerson,
    departments,
    departmentFilter,
    handleFilterChange,
    setDepartmentFilter,
}: {
    searchPerson: string;
    setSearchPerson: (value: string) => void;
    departments: string[];
    departmentFilter: string;
    handleFilterChange: (value: string, setter: (value: string) => void) => void;
    setDepartmentFilter: (value: string) => void;
}) {
    return (
        <div className="md:flex md:gap-3">
            <SearchInput value={searchPerson} onChange={e => handleFilterChange(e, setSearchPerson)} />
            <FilterSelect
                departments={departments}
                value={departmentFilter}
                onChange={e => handleFilterChange(e.target.value, setDepartmentFilter)}
            />
        </div>
    );
}
