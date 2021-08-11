function displayDollars(number) {
    if (number) {
        return "$" + number.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } else {
        return "-"
    }
}