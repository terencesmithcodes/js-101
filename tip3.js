function tipAmount(bill, rating='bad', people) {
    if (rating == 'good') {
        const total = ((bill * .2 + bill) / people).toFixed(2)
        return total
    }
    else if (rating == 'fair') {
        const total = ((bill * .15 + bill) / people).toFixed(2)
        return total
    }
    else {
        const total = ((bill * .10 + bill) / people).toFixed(2)
        return total
    }
}
console.log(tipAmount(57689, 'fair',5))