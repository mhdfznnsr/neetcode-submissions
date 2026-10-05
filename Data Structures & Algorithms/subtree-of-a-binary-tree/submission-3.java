/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {  
    public boolean isSame(TreeNode root, TreeNode subRoot){
        if(root == null && subRoot == null ) return true;
        if(root != null && subRoot != null && root.val == subRoot.val){
            return isSame(root.left,subRoot.left) && isSame(root.right,subRoot.right);
        }
        return false;
    }
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        while(!q.isEmpty()){
            TreeNode node = q.poll();
            if(node.left != null) q.add(node.left);
            if(node.right != null) q.add(node.right);

            if(isSame(node,subRoot)){
                return true;
            }
        }
        return false;
    }
}
