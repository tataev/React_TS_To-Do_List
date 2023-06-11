import classes from './Header.module.scss';
// инкапсулировали классы модулем Header.module.scss, удаляем старый scss
// import './Header.scss';
export const Header = () => {
    return (
    <>
        {/*<header className="header">*/}
        <header className={classes.header}>
            {/*<div className="header-container">*/}
            <div className={classes.container}>
                {/*<a href="/">ToDo</a>*/}
                <a href="/" className={classes.link}>ToDo</a>
                {/*Так добавляются несколько классов*/}
                {/*<a href="/" className={`${classes.link} ${classes.active}`}>ToDo</a>*/}
            </div>
        </header>
    </>
    )
}