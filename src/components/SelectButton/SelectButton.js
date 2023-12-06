import PropTypes from "prop-types";
import {useState} from "react";
import styles from "./SelectButton.module.css";

SelectButton.propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func,
    color: PropTypes.string,
    fontSize: PropTypes.number,
};

function SelectButton({options = ["All" , "Incomplete" , "Completed"], color = "#cccdde" , fontSize = 1.8}) {
    const optionsList = options.map((option , i) => <option value={option} key={i}>{option}</option>);
    const [option , setOption] = useState(options[0]);
    function onChange(e) {
        setOption(option => e.target.value);
    }
    return(
        <div>
            <select style={{backgroundColor: color , fontSize: `${fontSize}rem`}} className={styles.select} name="select" id="select" onChange={onChange} value={option}>{optionsList}</select>
        </div>
    )
}
export default SelectButton;