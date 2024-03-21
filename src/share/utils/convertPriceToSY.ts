export const convertPriceToSY = (price: number) => {
    const formattedPrice = new Intl.NumberFormat('en-SY', {
        style: 'currency',
        currency: 'SYP',
    }).format(price);
    return formattedPrice
} 