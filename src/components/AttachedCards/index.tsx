import {useEffect, useState} from "react";

import {IAttachedCards} from "@utils/types";

import LittleCard from "@components/AttachedCards/LittleCard";

import plusIcon from '@assets/images/plus.png'
import styles from './style.module.scss'

const AttachedCards = () => {
    const [attachedCards,setAttachedCards] = useState<IAttachedCards[]>([])

    useEffect(()=>{
        (async()=>{
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cards`);
            console.log(response)
            const data = await response.json()
            setAttachedCards(data)
        })()
    },[])
    return (
        <div className={styles.cards}>
            {attachedCards.map((item:IAttachedCards)=>{
                return <LittleCard key={item.id} {...item}/>
            })}
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