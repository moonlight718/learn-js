function reversePrint(head) {
  const p  = head;

  const arr = [];
  while (p) {
    arr.push(p.val);
    p = p.next;
  }
  return arr.reverse();
}