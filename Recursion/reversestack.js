function rev(){
    if(s1.length>0){
        let x=s1[s1.length-1];
        s1.pop();
        rev()
        insert(x)
    }
}

function insert(x){
    if(s1.length==0){
        s1.push(x)
    }
    else {
        let a=s1[s1.length-1];
        s1.pop();
        insert(x)
        s1.push(a);
    }
}
console.log(rev(s1))