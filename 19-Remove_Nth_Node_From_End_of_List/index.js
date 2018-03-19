/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let arr = [], node = head, headTemp = head

  for (let i = 0; i < n; i++) {
    node = node.next
  }

  if (!node) {
    return head.next
  }

  while (1) {
    node = node.next

    if (!node) {
      headTemp.next = headTemp.next.next
      break
    } else {
      headTemp = headTemp.next
    }
  }

  return head
};