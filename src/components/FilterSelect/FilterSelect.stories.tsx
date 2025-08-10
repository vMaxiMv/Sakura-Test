import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FilterSelect } from './FilterSelect';

const meta: Meta<typeof FilterSelect> = {
    title: 'Components/FilterSelect',
    component: FilterSelect,
    argTypes: {
        onChange: { action: 'changed' },
    },
};

export default meta;
type Story = StoryObj<typeof FilterSelect>;

export const Default: Story = {
    args: {
        departments: [
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
        ],
        value: 'Analitics',
    },
};

export const Interactive: Story = {
    render: args => {
        const [val, setVal] = useState<string>(args.value ?? 'All');
        return (
            <FilterSelect
                {...args}
                value={val}
                onChange={e => {
                    setVal(e.target.value);
                    args.onChange?.(e);
                }}
            />
        );
    },
    args: {
        departments: [
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
        ],
        value: 'Sales',
    },
};
