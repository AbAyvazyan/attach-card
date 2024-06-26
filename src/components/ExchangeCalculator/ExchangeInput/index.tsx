import {ChangeEvent, FC} from "react";
import {FilledInput, FormControl, InputAdornment} from "@mui/material";
import rubPng from '@assets/images/rub.png'
import fPng from '@assets/images/f.png'
import './style.scss';


const ExchangeInput: FC<{
    exchangeType?: string,
    readonly?: boolean,
    value?:number,
    setValue?:(value:string)=>void
}> = ({exchangeType, readonly,value,setValue}) => {
    return <>
        <FormControl sx={{width: '20ch', border: 'none'}}>
            <FilledInput
                sx={{background: '#FAFAFC'}}
                id={exchangeType === 'rub' ? 'rub' : 'fExchange'}
                name={exchangeType === 'rub' ? '' : 'amount'}
                endAdornment={<InputAdornment position="end" sx={{color: '#8F90A6'}}>
                    <img src={exchangeType === 'rub' ? rubPng : fPng} alt='exchange-type'/>
                </InputAdornment>}
                aria-describedby="filled-exchange-helper-text"
                inputProps={{
                    'aria-label': 'exchange',
                    placeholder: '0000.00',
                    style: {
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '24px',
                        textAlign: 'left',
                        color: '#8F90A6',
                        padding: '15px 0 15px 12px'
                    },
                    readOnly: readonly,
                    value,
                    onChange:(e:ChangeEvent<HTMLInputElement>)=>setValue && setValue(e.target.value)
                }}
            />
        </FormControl>
    </>
}

export default ExchangeInput