export type TransactionData = {
    date: string;
    wallet_address: string;
    hash: string;
    payment_amount: number;
    payment_currency: string;
    no_of_tokens_purchased: number;
}

export type UpdateDataTpe = {
    usdt: number;
    sold_tokens: number;
}

export const addTransaction = async (data: TransactionData) => {
    const url = '/api/google/transaction/add'

    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "action": "POST",
            "date": data.date,
            "wallet_address": data.wallet_address,
            "hash": data.hash,
            "payment_amount": data.payment_amount,
            "payment_currency": data.payment_currency,
            "no_of_tokens_purchased": data.no_of_tokens_purchased   
        })
    })

    const result = res.json()
    return result
}

export const updateData = async (data: UpdateDataTpe) => {
    const url = '/api/google/dapp/update'

    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "action": "UPDATE",
            "usdt": data.usdt,
            "sold_tokens": data.sold_tokens
        })
    })

    const result = res.json()
    return result
}