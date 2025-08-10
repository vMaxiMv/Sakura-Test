# Sakura Test

## Соответствие требованиям задания
## Данные
1. Создан массив из 100 объектов с данными с требуемыми полями (data/employees.ts)
2. Написан API Endoint Next js, возвращающий эти данные по запросу с клиента (app/api/employees/route.ts)

## Функционал
1. Создана таблица с колонками всех необходимых полей(components/EmployeeTable.tsx)
   ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/1.jpg)
3. Написан хук для сортировки по клику на заголовок столбца
   ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/1.jpg)
5. Написан хук для фильтрации по полю department с выпадающим списком всех отделов
   ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/8.jpg)
7. Добавлен хук с поиском сотрудника по имени с задеркжй в 300мс, выполненный при помощи useDebounce
   ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/3.jpg)
9. Адаптивная верстка добавлена
    ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/5.jpg)
    ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/6.jpg)

## Технологии
* React 19 версии
* Tailwind css
* Next js
* Untitled UI

## Архитектура
1. Выполнено разделение на компоненты (FilterSelect, TableControls, SearchInput, PaginationCardMinimal)
2. Созданы кастомные хуки для фильтрации, сортировки и поиска (hooks/...)

## Дополнительно
* Для оптимизации рендеров добавлены хуки useMemo
* Компонент протестирован визуально и интерактивно в Storybook
  ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/8.jpg)
* Jest тесты. Проверяют рендеринг всех опций фильтрации, вызов onChange при выборе значений и обновление селектов
  ![Image alt](https://github.com/vMaxiMv/Sakura-Test/blob/main/public/7.jpg)
  
