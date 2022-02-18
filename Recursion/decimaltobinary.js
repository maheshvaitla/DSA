let arr=[]
function dec(n){
    if(n==0){
        return
    } else {
        dec(Math.floor(n/2));
        arr.push(n%2) 
    }
}
dec(15)
console.log(arr.join(""))