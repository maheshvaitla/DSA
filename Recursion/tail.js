function tail(n){
    if(n==0){
        return
    } else {
        console.log(n);
        tail(n-1);
    }
}
tail(5)