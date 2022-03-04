
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// Complete the function below

function mirror(root){
    if(root==null){
        return null
    } else {
        if(root.left!=null){
            mirror(root.left)
        } 
        if(root.right!=null){
            mirror(root.right)
        }
        let temp=root.left
        root.left=root.right
        root.right=temp
    }
    return root
   
}

