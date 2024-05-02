import styles from './style.module.scss'
import ExchangeInput from "@components/ExchangeCalculator/ExchangeInput";
import {useState} from "react";

const ExchangeCalculator = () =>{
    const [fExchange,setFExchange] = useState<string>('')

    const getExchangeValueHandler = (value:string) =>{
        if(!+value){
            if (!value.length){
                setFExchange('')
                return
            }
            return
        }
        setFExchange(value)
    }
    return <div className={styles.calculator}>
        <p>Укажите сумму</p>
        <div className={styles.calcInputs}>
            <ExchangeInput setValue={getExchangeValueHandler} value={+fExchange}/>
            <ExchangeInput exchangeType='rub' value={+fExchange*15} readonly/>
        </div>
    </div>
}

export default ExchangeCalculator