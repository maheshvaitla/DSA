function head(n){
    if(n==0){
        return;

    } else {
        head(n-1);
        console.log(n)
    }
}
head(5)