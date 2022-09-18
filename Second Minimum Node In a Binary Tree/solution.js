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
var getValues = function(root){
    let values = [];
    if(root){
        values.push(root.val);
        let leftValues = [];
        let rightValues = [];
        if(root.left){
            leftValues = getValues(root.left);
        }
        if(root.right){
            rightValues = getValues(root.right);
        }
        if(leftValues.length > 0){
            values.push(...leftValues);
        }
        if(rightValues.length > 0){
            values.push(...rightValues);
        }
    }
    return values;
}
var findSecondMinimumValue = function(root) {
    let values = getValues(root);
    values = values.sort();
    let numberOfValuesChecked = 0;
    for(let i=0; i<values.length; i++){
        if(values[i] && values[i]!=values[i-1]){
            numberOfValuesChecked++
        }
        if(numberOfValuesChecked === 2){
            return values[i];
        }
    }
    return -1;
};