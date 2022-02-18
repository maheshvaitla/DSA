function Ways(n){
    if(n==0 || n==1){
        return 1
    }
    if(n<0){
        return 0
    } else {
        return Ways(n-1)+Ways(n-2)+Ways(n-3)
    }
}
console.log(Ways(4))