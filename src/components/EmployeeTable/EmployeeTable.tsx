import { cn } from '@/utils/utils';
import { Cell, Column, Row, Table, TableBody, TableHeader } from 'react-aria-components';
import Container from '../Container';
import { useEmployees } from '@/hooks/useEmployees';
import { PaginationCardMinimal } from '../Pagination/PaginationCardMinimal';
import { FilterSelect } from '../FilterSelect/FilterSelect';
import { SearchInput } from '../SearchInput/SearchInput';
import { TableControls } from './TableControls';

export function EmployeeTable() {
    const {
        employees,
        departments,
        departmentFilter,
        setDepartmentFilter,
        handleFilterChange,
        searchPerson,
        setSearchPerson,
        loading,
        error,
        sortDescriptor,
        setSortDescriptor,
        page,
        setPage,
        totalPages,
    } = useEmployees();

    if (loading) {
        return <div className="mx-auto text-gray-500">Загрузка...</div>;
    }
    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <Container>
            <TableControls
                searchPerson={searchPerson}
                setSearchPerson={setSearchPerson}
                departments={departments}
                departmentFilter={departmentFilter}
                handleFilterChange={handleFilterChange}
                setDepartmentFilter={setDepartmentFilter}
            />

            <div className="mt-5 overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
                <Table
                    aria-label="Team members"
                    selectionMode="multiple"
                    sortDescriptor={sortDescriptor}
                    onSortChange={setSortDescriptor}
                    className={cn('w-full border-collapse text-base text-gray-900')}
                >
                    <TableHeader className={cn('bg-gray-100')}>
                        <Column
                            id="name"
                            isRowHeader
                            allowsSorting
                            className={cn(
                                'px-6 py-3 text-left font-semibold text-gray-900 border-b border-gray-200',
                                'first:rounded-tl-xl last:rounded-tr-xl'
                            )}
                        >
                            Фамилия Имя
                        </Column>
                        <Column
                            id="position"
                            allowsSorting
                            className={cn('px-6 py-3 text-left font-semibold text-gray-900 border-b border-gray-200')}
                        >
                            Должность
                        </Column>
                        <Column
                            id="department"
                            allowsSorting
                            className={cn('px-6 py-3 text-left font-semibold text-gray-900 border-b border-gray-200')}
                        >
                            Отдел
                        </Column>
                        <Column
                            id="salary"
                            allowsSorting
                            className={cn('px-6 py-3 text-left font-semibold text-gray-900 border-b border-gray-200')}
                        >
                            Заработная плата
                        </Column>
                        <Column
                            id="hireDate"
                            allowsSorting
                            className={cn('px-6 py-3 text-left font-semibold text-gray-900 border-b border-gray-200')}
                        >
                            Дата приема
                        </Column>
                    </TableHeader>
                    <TableBody>
                        {employees.map(item => (
                            <Row
                                key={item.id}
                                className={cn(
                                    'border-b border-gray-200 hover:bg-gray-50 transition-colors',
                                    'last:border-b-0'
                                )}
                            >
                                <Cell className={cn('px-6 py-4 text-gray-900')}>{item.name}</Cell>
                                <Cell className={cn('px-6 py-4 text-gray-900')}>{item.position}</Cell>
                                <Cell className={cn('px-6 py-4 text-gray-900')}>{item.department}</Cell>
                                <Cell className={cn('px-6 py-4 text-gray-900')}>
                                    {item.salary.toLocaleString('ru-RU')} ₽
                                </Cell>
                                <Cell className={cn('px-6 py-4 text-gray-900')}>
                                    {new Date(item.hireDate).toLocaleDateString('ru-RU')}
                                </Cell>
                            </Row>
                        ))}
                    </TableBody>
                </Table>
                <PaginationCardMinimal
                    align="center"
                    page={page}
                    total={totalPages}
                    onPageChange={setPage}
                    className="px-4 py-3 md:px-5 md:pt-3 md:pb-4"
                />
            </div>
        </Container>
    );
}
