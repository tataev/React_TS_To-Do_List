```
============================================================================================
#####Заметки
============================================================================================
Этап I создание и описание проекта
============================================================================================
//npx create-react-app my-app --template typescript
npm uninstall -g create-react-app
#вставим название
npx create-react-app todo --template typescript
cd todo
npm start
#C:\Users\velmo\Desktop\Courses\todo-layout
============================================================================================
описание файлов
============================================================================================
import './App.css'
форматы js и jsx взаимозаменяемые, а tsx используем для того, чтобы использовать логинку typescript внутри своих файлов. Также это главная точка входа приложения React

<App /> - это компонент, который по сути своей функция возвращающая вместо себя кусок вёрстки

root получает элемент по идентификатору root, является по типу своему HTML элементом.
От метода root мы используем метод render, использующий вёрстку компонента <App />, возвращающего кусок вёрстки функцией. 

метод reportWebVitals позволяет анализировать наши страницы


public/index.html - входная вёрстка, которая будет собирать в себе reactjs приложение

в нём есть блок с идентификатором <div id="root"> </div> в этот блок и будет помещаться вся вёрстка, которую мы разработаем на react 

именно этот блок мы получаем в файле index.tsx через метод dpcoment.getElementyId('root') as HTMLElement 
и внутри него методом рендера размещаем всю нашу вёрстку.

Вся наша вёрстка будет храниться в компоненте App, который импортируется из некого компонента файла .\App
имеется ввиду App.tsx, который расположен рядом (в папке src) 

App.tsx содержит функцию App, которая возвращает вёрстку. 

Каждый компонент приложения React - это функция, которая вместо себя возвращает вёрстку.

Подобный синтаксис равносилен вызову функции. Мы можем представить, что вместо тега <App /> 
мы здесь видим вызов App функции, которая сюда вернёт определённую вёрстку. 

В этой вёрстке мы и видим те самые данные, которые мы видим в открытом приложении React, которая генерируется при запуске. 

Конкретно "Edit src/App.tsx and save to reload"

Reload позволяет собирать приложения и изменять его на ходу, что удобнее чем использование стандартного live сервера при разработке вёрстки.

============================================================================================
подключение стилей
В src у нас есть App.css с обновленными стилями.
Данный файл просто импортирован в компонент App()

все стили, которые применены к компоненту ./App.css будут применены ко всей вёрстки компонента App function App() и ко всем компонентам внутри компонента App.

Картинка импортирована из картинки в src, а это изображение вставлено в артибут src. Таким образом происходит вывод картинок на странице.

============================================================================================ 
Этап II 
Чистка проекта
============================================================================================
Почистим приложение от App, создадим в папке pages ToDoList
Установим scss 
npm install sass -save-dev
сократим ссылку 
npm i sass -save-dev


package.json устанавливаем devDependencies потому, что в финальном продукте (production) нам не нужны компоненты разработки, они нужны только во время разработки приложения
  "devDependencies": {
    "sass": "^1.62.1"
  },
  
Теперь наше приложение умеет работать с компонентом стилей scss 
Если есть ошибки можно посмотреть в файле проекта, но нужно удалять node_modules и файл package-lock.json
```
