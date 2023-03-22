module.exports = function reverse (n) {
    let x = Math.abs(n);
    return Number(String(x).split("").reverse().join(""));
}
