import styles from './style.module.scss'

const Card = () => {
    return (
        <div className={styles.holder}>
        <div className={styles.bankCard}>
            <div>
                <label htmlFor="cardNumber">Номер карты</label>
<<<<<<< HEAD
                <input className={styles.input} id='card_number' type="text" name='card_number' placeholder='Номер карты' maxLength={16}/>
=======
                <input className={styles.input} id='cardNumber' type="text" name='cardNumber' placeholder='Номер карты' maxLength={16}/>
>>>>>>> 6de41de95923dcc746c9bfab1a6a8b3dc9dfbef4
            </div>

            <div className={styles.cardValidity}>
                <label htmlFor="month">Действует до</label>
                <div className={styles.cardValidTime}>
<<<<<<< HEAD
                    <input className={styles.input} id='month' type="text" name='expiry_month' placeholder='мм'  maxLength={2}/>
                    <span>/</span>
                    <input className={styles.input} id='year' type="text" name='expiry_year' placeholder='гг' maxLength={2}/>
=======
                    <input className={styles.input} id='month' type="text" name='cardMonth' placeholder='мм'  maxLength={2}/>
                    <span>/</span>
                    <input className={styles.input} id='year' type="text" name='cardYear' placeholder='гг' maxLength={2}/>
>>>>>>> 6de41de95923dcc746c9bfab1a6a8b3dc9dfbef4
                </div>
            </div>


        </div>

    <div className={styles.cvvPart}>
        <div className={styles.line}></div>
        <div className={styles.cvvCodePart}>
            <label htmlFor="cvv">CVV/CVC</label>
            <div>
<<<<<<< HEAD
            <input className={styles.input} id='cvv' type="text" name='cvv' placeholder='000' maxLength={3}/>
=======
            <input className={styles.input} id='cvv' type="text" name='cardCvv' placeholder='000' maxLength={3}/>
>>>>>>> 6de41de95923dcc746c9bfab1a6a8b3dc9dfbef4
            <p>три цифры с обратной стороны карты</p>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Card