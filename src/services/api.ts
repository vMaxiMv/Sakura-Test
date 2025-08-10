import { IEmployee } from '@/types/employee';

export async function fetchEmployees(): Promise<IEmployee[]> {
    const res = await fetch('/api/employees');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}
