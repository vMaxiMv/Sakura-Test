export function FilterSelect({
    departments,
    value,
    onChange,
}: {
    departments: string[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
    return (
        <div className="w-full md:w-1/2 ml-auto">
            <select
                id="filter_department"
                value={value}
                onChange={onChange}
                className="block mt-5 p-2 w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="All"> Все отделы</option>
                {departments.map(department => (
                    <option key={department} value={department}>
                        {department}
                    </option>
                ))}
            </select>
        </div>
    );
}
