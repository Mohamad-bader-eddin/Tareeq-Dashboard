export const getType = (type: string) => {
    if (type === "once")
        return "Discount"
    else if (type === "period")
        return "Promo with Deadline"
    else if (type === "always")
        return "Cash Back"
    return "once"
}