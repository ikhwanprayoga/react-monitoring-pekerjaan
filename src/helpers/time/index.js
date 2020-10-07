export function timeIndo() {
    return true
}

export function dateIndo(timeStamps) {
    const date = new Date(timeStamps)
    const tanggal = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    return tanggal
}