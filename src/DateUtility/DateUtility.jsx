export function subtractOneDay(dateValue) {
    const dateProvided = new Date(dateValue)
    dateProvided.setDate(dateProvided.getDate() - 1)
    const adjustedDate = dateProvided.toISOString().split('T')[0]
    return adjustedDate
}