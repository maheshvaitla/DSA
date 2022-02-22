//Enter code here
function runProgram(input){
    input=input.split("\n");
    let t=+input[0];
    let line=1;
    for(let i=0;i<t;i++){
        let [l,n]=input[line++].trim().split(" ").map(Number);
        let arr =input[line++].trim().split(" ").map(Number);
       console.log(p1(l,n,arr));
    }
}
function p1(l,n,arr){
    if(n==0){
        return "Yes";
    }
      for(let i=0;i<l;i++) {
        if (arr[i] === 0 && !arr[i-1] && !arr[i+1]) {
            arr.splice(i, 1, 1);
            n--;
            if (n==0) {
                return "Yes";
            }
        }
    }
    return "No";
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