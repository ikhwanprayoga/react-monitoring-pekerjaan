export function timeIndo() {
    return true
}

export function dateIndo(dateData) {
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Augustus", "September", "Oktober", "November", "Desember"
    ]
    const newDate = new Date(dateData)
    
    const tanggal = `${newDate.getDate()} ${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`
    return tanggal
}