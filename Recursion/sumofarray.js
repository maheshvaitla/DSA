function sum(arr,n){
    if(n<=0){
        return 0
    } else {
        return sum(arr,n)+arr[n-1]
    }
}
