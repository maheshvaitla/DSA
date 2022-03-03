//Enter code here
function runProgram(input){
    input=input.split("\n")
    let n=+input[0];
    let arr =input[1].trim().split(" ").map(Number);
    console.log(p1(n,arr))
}
function p1(n,arr){
     for (let i = 0; i < n; i++) {
        let low = i;
        let high = i;
        while (low>=0&&arr[low]<=arr[i]){
            low--;
        }
        while(high<n-1 &&arr[high]>=arr[i]){
            high++;
        }
        if(low==-1&&high==n-1){
            return arr[i];
        }
    }
    return -1;
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
      process.exit(0) ;
    });