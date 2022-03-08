function masaiTraversalAndQueries(N, M, q, arr){
    //write code here 
    
    let out="";
    
    if(q==1){
        for(let i=0;i<N;i++){
            if(i%2==0){
               for(let j=0;j<M;j++){
                out+=arr[i][j]+" "
               }
               } else if(i%2==1) {
                    for(let j=M-1;j>=0;j--){
                    out+=arr[i][j]+" "
                  }
              
               }
        }
    }else if(q==2){
        for(let i=0;i<N;i++){
            if(i%2==1){
               for(let j=0;j<M;j++){
                out+=arr[i][j]+" "
               }  
               }else if(i%2==0) {
                  for(let j=M-1;j>=0;j--){
                    out+=arr[i][j]+" "
                  }
              
        }
        }
        
    } 
console.log(out)
  
}
