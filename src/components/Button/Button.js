import styles from "./Button.module.css"
import PropTypes from "prop-types";

Button.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string,
    fontSize: PropTypes.number,
};

function Button({children , onClick , color = "#646ff0" , fontSize = 1.8}) {
    return(
        <div>
            <button className={styles.btn} style={{backgroundColor: color , fontSize:`${fontSize}rem`}} onClick={onClick}>{children}</button>
        </div>
    )
}
export default Button;