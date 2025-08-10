export function SearchInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <div className="w-full md:w-1/2 mr-auto">
            <input
                type="text"
                placeholder="Поиск по имени..."
                value={value}
                onChange={e => onChange(e.target.value.toString())}
                className="block mt-5 p-2 w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    );
}
