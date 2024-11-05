function converter (money, originalCurrency, targetCurrency) {
    switch(originalCurrency + ' to ' + targetCurrency) {
        case 'RUB to USD':
            return money / 93 + '$';
        case 'RUB to EUR':
            return money / 103 + 'eur';
        case 'USD to RUB':
            return money * 93 + 'rub';
        case 'EUR to RUB':
            return money * 103 + 'rub';
        case 'USD to EUR':
            return money * 0.9 + 'eur';
        case 'EUR to USD':
            return money / 0.9 + '$';
        default:
            return null;
    }
}
console.log(converter(100, 'EUR', 'USD'));