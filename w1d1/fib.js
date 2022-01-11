const fib = function (number) {
    number = Math.abs(number);
    if (number < 0) {
        return 0;
    }
    if (number <= 2) {
        return 1;
    }
    return fib(number - 1) + fib(number - 2);
};

const args = process.argv.slice(2)
console.log("Fibonacci of -15: ", fib(args[0]));
console.log("Fibonacci of -15: ", fib(args[1]));
