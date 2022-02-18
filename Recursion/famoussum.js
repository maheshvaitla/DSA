function fam(n){
    if(n/10==0){
        return n
    } else {
        return n%10+fam(n/10)
    }
}
console.log(fam(148))