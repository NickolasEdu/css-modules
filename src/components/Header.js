import style from './Header.module.css'

function Header() {
    return(
        <header className={style.header}>
            <h1>Welcome</h1>
            <button className={style.btn}>Test button</button>
        </header>
    )
}

export default Header 