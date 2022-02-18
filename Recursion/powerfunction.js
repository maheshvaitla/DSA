function power(a,b){
    if(b==0){
        return 1
    } 
    if(b==1){
        return a;
    } else {
        return a*power(a,b-1)
    }
}
console.log(power(5,3))