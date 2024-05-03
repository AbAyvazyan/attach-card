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
        amount: 0,
        card_number: "",
        cvv: 0,
        expiry_month: "",
        expiry_year: "",
        isSaved: true,
    }
    for (const key in formValues) {
        reqData[key] = formValues[key]
    }

    if (!reqData.amount) {
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
    reqData.cvv = +reqData.cvv;
    reqData.amount = +reqData.amount;

    try {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const csrfToken = csrfTokenMeta ? csrfTokenMeta.getAttribute('content') : '';

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (csrfToken) {
            headers.append('X-CSRF-TOKEN', csrfToken);
        }

        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cards`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(reqData),
            mode: 'no-cors',
        });
        alert('Payed')
    } catch (err) {
        console.log(err)
    }

    e.currentTarget.reset();

}

export {onSubmitHandler}