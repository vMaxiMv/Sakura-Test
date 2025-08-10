import { cn } from '@/utils/utils';
import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({ children, className }: ContainerProps) {
    return <div className={cn('mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}
