export const convertPriceToSY = (price: number) => {
    const absFormattedNumber = Math.abs(price).toLocaleString('en-SY');
    const formattedPrice = price < 0 ? `SYP -${absFormattedNumber}` : `SYP ${absFormattedNumber}`;
    return formattedPrice
} 