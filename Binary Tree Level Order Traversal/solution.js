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
 * @return {number[][]}
 */

var levelOrder = function(root, result=[], level=0) {
    if(root && root.val !== null) {
        if(result[level]){
            result[level].push(root.val);
        } else {
            result[level] = [root.val];
        } 
        if(root.left){
            result = levelOrder(root.left, result, level+1)
        }
        if(root.right){
            result = levelOrder(root.right, result, level+1)
        }
    }
    
    return result;
};