import { fetchEmployees } from '@/services/api';
import { IEmployee } from '@/types/employee';
import { useEffect, useState } from 'react';

export function useEmployeesData() {
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const data = await fetchEmployees();
                setEmployees(data);
            } catch (err) {
                setError('Failed to fetch employees');
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    return { employees, loading, error };
}
