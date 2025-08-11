# Sakura Test
## Описание
Простое React приложение, отображающее таблицу сотрудников с возможностью фильтрации, сортировки и поиска.
## Запуск
```
git clone ...
npm install
npm run dev
```
Моя версия node js: 23.11.0

## Соответствие требованиям задания
## Данные
1. Создан массив из 100 объектов с данными с требуемыми полями (data/employees.ts)
2. Написан API Endoint Next js, возвращающий эти данные по запросу с клиента (app/api/employees/route.ts)

## Функционал
1. Создана таблица с колонками всех необходимых полей(components/EmployeeTable.tsx)
   ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/1.jpg)
   рис 1 - скрин таблицы на десктопе
   
3. Написан хук для сортировки по клику на заголовок столбца
   ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/2.jpg)
   рис 2 - скрин демонстрации фильтрации по одному из отделов
   
5. Написан хук для фильтрации по полю department с выпадающим списком всех отделов
   ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/8.jpg)
   рис 3 - скрин выпадающего списка в select (из Storybook)
   
7. Добавлен хук с поиском сотрудника по имени с задержкой в 300мс, выполненный при помощи useDebounce
   ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/3.jpg)
   рис 4 - скрин поиска сотрудника по имени
   
9. Адаптивная верстка добавлена
   
    ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/5.jpg)
    ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/6.jpg)
   рис 5 - скрин таблицы на мобильном устройстве

## Технологии
* React 19 версии
* Tailwind css
* Next js
* Untitled UI

## Архитектура
1. Выполнено разделение на компоненты (FilterSelect, TableControls, SearchInput, PaginationCardMinimal)
2. Созданы кастомные хуки для фильтрации, сортировки и поиска (hooks/...)
### Пример компонента FilterSelect
```
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

```

## Дополнительно
* Для оптимизации рендеров добавлены хуки useMemo
* Компонент протестирован визуально и интерактивно в Storybook
  ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/8.jpg)
  рис 6 - скрин из Storybook с демонстрацией компонента FilterSelect
  
* Jest тесты. Проверяют рендеринг всех опций фильтрации, вызов onChange при выборе значений и обновление селектов
  ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/7.jpg)
  рис 7 - скрин результатов тестирования
  
