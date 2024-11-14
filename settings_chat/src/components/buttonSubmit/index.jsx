import React from "react";
import styles from './index.module.css'

function ButtonSubmit({ eventClick }) {
    return (
        <button className={styles.buttonSubmit} onClick={eventClick} >
            <p className={styles.buttonText} >SALVAR PERFIL</p>
        </button>
    )
}

export default ButtonSubmit;