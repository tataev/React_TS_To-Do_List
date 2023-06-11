// import React from "react";
import {Header} from "../Components/Header/Header";
import {Form} from "../Components/Form/Form";
import {ToDoList} from "../Components/ToDoList/ToDoList";

// При переносе не забывать, что вместо атрибута class в Реакте используется className
// а самозакрывающиеся теги вроде input надо заканчивать на "/"


export const ToDoListPage = () => {
    return (
    <>
        {/*<header className="header">*/}
        {/*    <div className="header-container">*/}
        {/*        <a href="/">ToDo</a>*/}
        {/*    </div>*/}
        {/*</header>*/}

        <Header />
        <Form />
        <ToDoList />

        {/*<div className="form-wrapper">*/}
        {/*    <form action="/">*/}
        {/*        <label>*/}
        {/*            <input type="text" />*/}
        {/*                <button></button>*/}
        {/*        </label>*/}
        {/*    </form>*/}
        {/*</div>*/}
        {/*<div className="todo-container">*/}
        {/*    <ul className="todo-list failed">*/}
        {/*        <li className="todo-list-item__wrapper">*/}
        {/*            <span>Первая задача</span>*/}
        {/*            <div className="todo-list-item__buttons">*/}
        {/*                <button className="btn-trash"></button>*/}
        {/*                <button className="btn-check"></button>*/}
        {/*            </div>*/}
        {/*        </li>*/}
        {/*    </ul>*/}
        {/*    <ul className="todo-list completed">*/}
        {/*        <li className="todo-list-item__wrapper">*/}
        {/*            <span>Вторая задача</span>*/}
        {/*            <div className="todo-list-item__buttons">*/}
        {/*                <button className="btn-trash"></button>*/}
        {/*                <button className="btn-uncheck"></button>*/}
        {/*            </div>*/}
        {/*        </li>*/}
        {/*    </ul>*/}
        {/*</div>*/}
    </>
    )
}

//
// <>
//             <span>ToDo List Page 1</span>
//             <br/>
//             <span>ToDo List Page 2</span>
//         </>
//

// Пример с React.Fragment
// <React.Fragment>
//             <span>ToDo List Page 1</span>
//             <br/>
//             <span>ToDo List Page 2</span>
//         </React.Fragment>
// <div>
//             <span>ToDo List Page 1</span>
//             <br/>
//             <span>ToDo List Page 2</span>
//         </div>