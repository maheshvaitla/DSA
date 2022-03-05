//Enter code here

function runProgram(input){
    input = input.split("\n");
    let T = +input[0];
    let line=1
    for(let i=0; i<T; i++){
        let N = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        let stack = [];
        let top=-1;
        let string=new Array(N).fill(0);
        for(let j=N-1; j>=0; j--){
            while(stack[top]<= arr[j]){
                top = pop(stack,N,top);
            }
            if(top==-1){
                string[j]=-1;
            }else{
                string[j]=stack[top];
            }
            top = push(stack,N, top, arr[j]);
        }
        string = string.join(" ");
        console.log(string);
    }
}



function push(stack, N, top, item){
   if(top==N-1){
       "overflow"
   }
   {
       top=top+1;
       stack[top]= item;
   }
   return top;
}
function pop(stack,N, top){
   if(top === -1){
       "underflow"
   }else {
       top = top-1;
   }
   return top;
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
   read += input;
});
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});

process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
});