/*
4
3 2 1 3
output
2

*/

function birthdayCakeCandles(candles) {
    let max = Math.max(...candles);
    return candles.filter(candle => candle === max).length;
}