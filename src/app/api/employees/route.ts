import { employees } from '@/data/empoyees';
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(employees);
}
