class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function mergeTwoLists(l1, l2) {
  const front = new ListNode(null);
  let p = front;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      p.next = l1;
      p = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      p = l2;
      l2 = l2.next;
    }
  }
  p.next = l1 ? l1 : l2;
  return front.next;
}

const arr1 = [1,2,3];
const arr2 = [1,3,4,5,6,7];

const front1 = new ListNode(null);
let p1 = front1;
for (let i = 0; i < arr1.length; i++) {
  p1.next = new ListNode(arr1[i]);
  p1 = p1.next;
}

const front2 = new ListNode(null);
let p2 = front2;
for (let i = 0; i < arr2.length; i++) {
  p2.next = new ListNode(arr2[i]);
  p2 = p2.next;
}

let res = mergeTwoLists(front1.next, front2.next);

while (res) {
  console.log(res.val);
  res = res.next;
}