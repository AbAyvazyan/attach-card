import {FormEvent} from "react";
import {IFormValues} from "@utils/types";

const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const formValues: { [key: string]: FormDataEntryValue } = {};

    for (const [key, value] of formData.entries()) {
        formValues[key] = value;
    }
    const reqData: IFormValues = {
        amount: "",
        card_number: "",
        cvv: 0,
        expiry_month: "",
        expiry_year: "",
        isSaved: true,
    }
    for (const key in formValues) {
        reqData[key] = formValues[key]
    }

    if (!reqData.amount.trim()) {
        alert('Amount is 0')
        return
    }

    if (reqData.card_number.trim().length < 16) {
        alert('Card Number should have 16 characters')
        return
    }

    if (String(reqData.cvv).length !== 3) {
        alert('CVV must have 3 characters')
        return
    }

    reqData.isSaved = !!reqData.isSaved

    try {

        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cards`, {
            method: "POST",
            body: JSON.stringify(reqData)
        });
        alert('Payed')
    } catch (err) {
        console.log(err)
    }

    e.currentTarget.reset();

}

export {onSubmitHandler}