const child_process = require("child_process");

// using child process
console.log("1: Start");

const newProcess = child_process.spawn("node", ["./fib.js", -15, 40], {
    stdio: "inherit",
});


console.log("3: End");
