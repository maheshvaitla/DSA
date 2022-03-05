// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

function isSameTree(a,b){
    
    if (a== null && b == null) {
       return true;
   } else if (a == null || b == null ) {
       return false;
   }
   return a.val == b.val && isSameTree(a.left, b.left) && isSameTree(a.right, b.right);

}
