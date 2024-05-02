import styles from './style.module.scss'
import ExchangeInput from "@components/ExchangeCalculator/ExchangeInput";
<<<<<<< HEAD
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
=======

const ExchangeCalculator = () =>{
    return <div className={styles.calculator}>
        <p>Укажите сумму</p>
        <div className={styles.calcInputs}>
            <ExchangeInput/>
            <ExchangeInput exchangeType='rub' readonly/>
>>>>>>> 6de41de95923dcc746c9bfab1a6a8b3dc9dfbef4
        </div>
    </div>
}

export default ExchangeCalculator