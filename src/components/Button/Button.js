import styles from "./Button.module.css"
function Button({children , onClick , color = "grey" , fontSize = 1.8}) {
    return(
        <div>
            <button className={styles.btn} style={{backgroundColor: color , fontSize:`${fontSize}rem`}} onClick={onClick}>{children}</button>
        </div>
    )
}
export default Button;