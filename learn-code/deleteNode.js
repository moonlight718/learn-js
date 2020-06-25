class ListNode {
  constructor(val) {
    this.val =val;
    this.next = null;
  }
}

function deleteNode(head, val) {
  const p = new ListNode(null);
  p.next = head;

  let pre = p;
  let cur = head;

  while(cur) {
    if (cur.val === val) break;
    pre = cur;
    cur = cur.next;
  }

  // 找到了
  if (cur) {
    pre.next = cur.next;
  }

  return p.next;

}

const arr = [1];

const list = new ListNode(null);
let  p = list;
for (let i = 0; i < arr.length; i++) {
  const node = new ListNode(arr[i]);
  p.next = node;
  p = p.next;
}
const head = deleteNode(list.next, 1);

let q = head;
while (q) {
  console.log(q.val);
  q = q.next;
}