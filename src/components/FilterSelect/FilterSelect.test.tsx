import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import { FilterSelect } from './FilterSelect';

describe('FilterSelect', () => {
    const mockDepartments = [
        'All',
        'IT',
        'HR',
        'Design',
        'Management',
        'Finance',
        'Marketing',
        'Administration',
        'Analitics',
        'Sales',
    ];
    const mockOnChange = jest.fn();

    it('рендерит все варианты выбора', () => {
        render(<FilterSelect departments={mockDepartments} value="All" onChange={mockOnChange} />);

        mockDepartments.forEach(dep => {
            expect(screen.getByRole('option', { name: dep })).toBeInTheDocument();
        });
    });

    it('вызывает onChange при выборе другого варианта', () => {
        const ControlledFilterSelect = () => {
            const [value, setValue] = useState('All');
            return (
                <FilterSelect
                    departments={mockDepartments}
                    value={value}
                    onChange={e => {
                        setValue(e.target.value);
                        mockOnChange(e);
                    }}
                />
            );
        };

        render(<ControlledFilterSelect />);

        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'IT' } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange.mock.calls[0][0].target.value).toBe('IT');
        expect(select).toHaveValue('IT');
    });
});
