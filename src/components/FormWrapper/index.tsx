import ExchangeCalculator from "@components/ExchangeCalculator";
import AttachedCards from "@components/AttachedCards";
import Card from "@components/Card";
import CheckboxPart from "@components/CheckboxPart";
<<<<<<< HEAD
import {onSubmitHandler} from "@utils/onSubmitHandler";

import styles from './style.module.scss'



const FormWrapper = () => {
    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <div className={styles.formContent}>
                <h1>Пополнить банковской картой</h1>
                <ExchangeCalculator/>
                <AttachedCards/>
                <Card/>
                <CheckboxPart/>
                <button className={styles.submitButton}>Оплатить</button>
            </div>
        </form>
    )
=======

import styles from './style.module.scss'

const FormWrapper = () => {
    return <form className={styles.form}>
        <div className={styles.formContent}>
            <h1>Пополнить банковской картой</h1>
            <ExchangeCalculator/>
            <AttachedCards/>
            <Card/>
            <CheckboxPart/>
            <button className={styles.submitButton}>Оплатить</button>
        </div>
    </form>
>>>>>>> 6de41de95923dcc746c9bfab1a6a8b3dc9dfbef4
}

export default FormWrapper