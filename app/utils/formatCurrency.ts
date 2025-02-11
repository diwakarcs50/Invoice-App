
interface iAppProps{
    amount : number,
    currency : "USD" | "EUR" |"INR"
}
export function formatCurrency({amount,currency}:iAppProps){
    return new Intl.NumberFormat("en-US",
        {
            style:'currency',
            currency:currency,
        }
    ).format(amount)
}