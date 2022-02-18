function str(name){
    
    if(name.length==0){
        return
        } else {
           
            return 1+ str(name.substring(1))
        }
}
console.log(str("mahesh"))