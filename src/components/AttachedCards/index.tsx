<<<<<<< HEAD
import {useEffect, useState} from "react";

import {IAttachedCards} from "@utils/types";

=======
>>>>>>> 6de41de95923dcc746c9bfab1a6a8b3dc9dfbef4
import LittleCard from "@components/AttachedCards/LittleCard";

import plusIcon from '@assets/images/plus.png'
import styles from './style.module.scss'

const AttachedCards = () => {
<<<<<<< HEAD
    const [attachedCards,setAttachedCards] = useState<IAttachedCards[]>([])

    useEffect(()=>{
        (async()=>{
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cards`);
            const data = await response.json()
            setAttachedCards(data)
        })()
    },[])
    return (
        <div className={styles.cards}>
            {attachedCards.map((item:IAttachedCards)=>{
                return <LittleCard key={item.id} {...item}/>
            })}
=======
    return (
        <div className={styles.cards}>
            <LittleCard/>
>>>>>>> 6de41de95923dcc746c9bfab1a6a8b3dc9dfbef4
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