import React from "react";
import styles from './index.module.css'


function InputConfig({ placeholder, eventChange, value }) {
    return (
        <div className={styles.master} >
            <p className={styles.text} >{placeholder}</p>
            <input className={styles.input} onChange={(event) => eventChange(event.target.value)} value={value} />
        </div>
    )
}

export default InputConfig;