export const convertPriceToSY = (price: number) => {
    // Determine the number of decimal places in the input price
    const decimalPlaces = price % 1 !== 0 ? (price.toString().split('.')[1] || '').length : 0;
    const absFormattedNumber = Math.abs(price).toLocaleString('en-SY', {
        minimumFractionDigits: decimalPlaces
    });
    const formattedPrice = price < 0 ? `SYP -${absFormattedNumber}` : `SYP ${absFormattedNumber}`;
    return formattedPrice
} 