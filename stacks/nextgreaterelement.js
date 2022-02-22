//Enter code here

function runProgram(input){
    input=input.split("\n");
    let t=+input[0]
    let line=1;
    for(let i=0;i<t;i++){
        let n=+input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(p(n,arr))
    }
}
function p(n,arr){
     let greater = Array(n).fill(-1);
    let stack = [];
    for(let i=0;i<n;i++) {
        while(stack.length && arr[stack[stack.length-1]] < arr[i]) {
            greater[stack[stack.length-1]] = arr[i];
            stack.pop();
        }
        stack.push(i);
    }
    return greater.join(" ");
    
    
    // 
    // let arr1=new Array(n).fill(-1);
    // for(let i=0; i<n; i++){
    //     for(let j=i; j<n; j++){
    //         if(arr[j] > arr[i]){
    //             arr1[i] = arr[j];
    //             break;
    //         }
    //     } 
            
    //     // if(!flag){
    //     //     for(let j=0; j<i; j++){
    //     //     if(arr[j] > arr[i]){
    //     //         arr1[i] = arr[j];
    //     //         flag = true;
    //     //         break;
    //     //         }
    //     //     }
    //     // }
    // }
    // return arr1.join(" ");
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