

function nick(n,x){
    if(n==x){
        return "true"
    }
    if(n>x){
        return "false"
    } else {
        return nick(n,x*10) || nick(n,x*20)
    }

}
console.log(nick(10,1))