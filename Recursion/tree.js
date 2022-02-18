function tree(n){
    if(n==0){
        return
    } else {
        console.log(n);
        tree(n-1)
        tree(n-1)
    }
}
tree(5)