/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 初始化
  let first = head, second
  if (first) {
    second = first.next
  }

  let ret = second || first

  let prev, next


  while (first && second) {
    // 前节点指向第二节点
    if (prev) {
      prev.next = second
    }

    // 缓存后节点
    next = second.next

    // 一二节点换位
    second.next = first
    first.next = next

    // 更新节点
    prev = first

    first = next
    if (next) {
      second = next.next
    }
  }

  return ret
};