class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function reverseList(head) {
  let p = null;
  let q = head;

  while (q) {
    const next = q.next;
    q.next = p;
    p = q;
    q = next;
  }
  return p;
}

const arr = [1,2,3];
const front = new ListNode(null);
let p = front;
for (let i = 0, len = arr.length; i < len; i++) {
  p.next = new ListNode(arr[i]);
  p = p.next;
}

let res = reverseList(front.next);

while (res) {
  console.log(res.val);
  res = res.next;
}