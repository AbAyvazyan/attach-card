import LittleCard from "@components/AttachedCards/LittleCard";

import plusIcon from '@assets/images/plus.png'
import styles from './style.module.scss'

const AttachedCards = () => {
    return (
        <div className={styles.cards}>
            <LittleCard/>
            <div className={styles.addNewCard}>
                <div>
                    <img src={plusIcon} alt='plus'/>
                </div>
                <p>Новая карта</p>
            </div>
        </div>
    )
}

export default AttachedCards