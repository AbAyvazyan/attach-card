import {Checkbox} from "@mui/material";
import alertIcon from "@assets/images/alert.png";
import styles from './style.module.scss'

const CheckboxPart = () => {
    return (
        <div className={styles.checkBox}>
            <div>
                <Checkbox
                    name='isSaved'
                    defaultChecked
                    sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                />
            </div>
            <div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p>Запомнить эту карту. Это безопасно.</p><img src={alertIcon} alt='alert'/>
                </div>
                <p>Сохраняя карту, вы соглашаетесь с <a href="">условиями привязки карты.</a></p>
            </div>
        </div>
    )
}

export default CheckboxPart