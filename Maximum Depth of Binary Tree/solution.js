/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, depth=1) {
    if(root === null) {
        return depth -1;
    }
    if(root && root.val != null){
        let leftDepth = depth;
        let rightDepth = depth;
        if(root.left){
            leftDepth = maxDepth(root.left, depth+1);
        }
        if(root.right){
            rightDepth = maxDepth(root.right, depth+1);
        }
        depth = leftDepth > rightDepth ? leftDepth : rightDepth;
    }
    return depth;
};