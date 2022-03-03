//Enter code here


let chess = new Array(10).fill(0).map(arr=>arr=(new Array(10).fill(0)))

function knight( i, j, N ){
    if(i<0||j<0||i>9||j>9){return false}
    
    if(N===0){
        chess[i][j]=1
        return;
    }
    
    knight(i-2,j+1,N-1)
    knight(i-2,j-1,N-1)
    knight(i+1,j+2,N-1)
    knight(i-1,j-2,N-1)
    knight(i+2,j+1,N-1)
    knight(i+2,j-1,N-1)
    knight(i+1,j-2,N-1)
    knight(i-1,j+2,N-1)
} 



function runProgram(input){
    input=input.split("\n");
    let [i,j,N]=input[0].trim().split(" ").map(Number)
    knight(i-1,j-1,N)
    
    
    let count =0
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            if(chess[i][j]===1){
                count++
            }
        }
        
    }
    console.log(count)
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