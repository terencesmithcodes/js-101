function tipAmount(bill, rating='bad') {
    if (rating == 'good') {
        return bill * .2
    }
    else if (rating == 'fair') {
        return bill * .15
    }
    else {
        return bill * .10
    }
}
console.log(tipAmount(300))