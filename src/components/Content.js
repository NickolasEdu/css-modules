import style from './Content.module.css'

function Content() {
    return(
        <div className={style.content}>
            <h2>Title</h2>
            <p>
                Um lorem ipsum qualquer da vida
            </p>
            <button className={style.btn}>Another test-button</button>
        </div>
    )
}

export default Content