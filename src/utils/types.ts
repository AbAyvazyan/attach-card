interface IAttachedCards {
    "id": number,
    "card_number": string,
    "expiry_month": string,
    "expiry_year": string,
    "cvv": number,
    "created_at": string,
    "updated_at": string
}

interface IFormValues {
    [key: string]: string|number|boolean|File;
    cvv:number
    expiry_month:string
    card_number:string
    expiry_year:string
    amount:number
    isSaved:boolean
}

export type {IAttachedCards,IFormValues}