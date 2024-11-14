import React from "react";
import styles from './index.module.css'


function InputConfig({ placeholder, eventChange, value }) {
    return (
        <div className={styles.master} >
            <p className={styles.text} >{placeholder}</p>
            <textarea
                value={value}
                className={styles.textarea}
                onChange={(event) => eventChange(event.target.value)}
                placeholder="Digite seu texto aqui"
                rows="4"
                cols="50"
            />
        </div>
    )
}

export default InputConfig;