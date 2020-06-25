class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function getKthFromEnd(head, k) {
  let p = head;
  let q = head;

  while (k && p) {
    p = p.next;
    k--;
  }
  
  while (p) {
    p = p.next;
    q = q.next;
  }

  return q;
  
}

const arr= [1,2,3,4,5];
let head = new ListNode(0);
let p = head;
for (let i = 0; i < arr.length; i++) {
  p.next = new ListNode(arr[i]);
  p = p.next;
}
let res = getKthFromEnd(head.next, 6);

while(res) {
  console.log(res.val);
  res = res.next;
}
