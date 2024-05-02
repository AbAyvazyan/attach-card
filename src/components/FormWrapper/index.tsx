import ExchangeCalculator from "@components/ExchangeCalculator";
import AttachedCards from "@components/AttachedCards";
import Card from "@components/Card";
import CheckboxPart from "@components/CheckboxPart";
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
}

export default FormWrapper