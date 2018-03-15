/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  var ret = head, prev, next = head
  var i = k
  var arr = []

  while (next) {
    // 遍历链表的前K项
    while (i--) {
      arr.push(next)
      next = next.next

      // 剩余不足k项，直接返回ret
      if (!next && i) {
        return ret
      }
    }

    // 逆序选出项
    while (arr.length) {
      let node = arr.pop()
      if (!prev) {
        ret = node
        prev = node
      } else {
        prev.next = node
        prev = node
      }
    }

    prev.next = next
    i = k
  }
};