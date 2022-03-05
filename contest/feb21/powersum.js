//Enter code here

function runProgram(input) {
    input = input.trim().split("\n");
    let [n, x] = input[0].trim().split(" ").map(Number);
    const result = powerSum(n, x);
    console.log(result);

}

let count = 0;
function  Search(arr, ans, cur, num){
    if (ans.length >= 0) {
        let sum = 0;
        for (let i = 0; i < ans.length; i++) {
            sum += ans[i]
        }
        if (sum == num) {
            count++;
        }
    }
    for (let i = cur; i < arr.length; i++) {
        ans.push(arr[i]);
        Search(arr, ans, i + 1, num);
        ans.pop();
    }
}


function powerSum(n, x){
    let arr = [];
    for (let i = 1; i <= n; i++) {
        let a = Math.pow(i, x);
        if (a <= n) {
            arr.push(a);
        }

    }
    Search(arr, [], 0, n);
    return count;
}




    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
