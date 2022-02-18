function san(n){
    if(n==0){
        return 1
    } if(n<0){
        return 0

    }
    else {
        return san(n-4)+san(n-8)
    }
}
console.log(san(12))