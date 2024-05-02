import styles from './style.module.scss'
import ExchangeInput from "@components/ExchangeCalculator/ExchangeInput";

const ExchangeCalculator = () =>{
    return <div className={styles.calculator}>
        <p>Укажите сумму</p>
        <div className={styles.calcInputs}>
            <ExchangeInput/>
            <ExchangeInput exchangeType='rub' readonly/>
        </div>
    </div>
}

export default ExchangeCalculator