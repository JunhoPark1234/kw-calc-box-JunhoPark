function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if (num <= 1) {
        return false; // 1 또는 음수는 소수가 아님
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // 2~제곱근 중 하나라도 나누어떨어지면 소수가 아님
        }
    }
    return true; // 나누어떨어지지 않으면 소수
}

function fact(num) {
    if (num >= 0) {
        let ans = 1;
        for (let i = num; i > 0; i--) {
            ans *= i;
        }
        return ans;
    }
    else
        return -1;
}

module.exports = {
    avg,
    prime,
    fact
}
