function detectPalII(N, string){
    let obj={}
    for(let i=0;i<N;i++){
        if(obj[string[i]]==undefined){
            obj[string[i]]=1
        } else {
            obj[string[i]]=obj[string[i]]+1
        }
    }
    let count=0
  for(let k in obj){
      if(obj[k]%2==1){
          count++
      }
  }
  console.log(count>1 ? "Not Possible!" :"Possible!")
    
 }