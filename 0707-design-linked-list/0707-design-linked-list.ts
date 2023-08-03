class LLNode {
  val: number;
  next: LLNode | null;

  constructor(val?: number, next?: LLNode | null) {
    this.val = val ? val : 0;
    this.next = next ? next : null;
  }
}

class MyLinkedList {
  head: LLNode;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  getNode(index: number): LLNode {
    if (index < 0 || index >= this.size) return null;
    let count = 0;
    let node = this.head;
    while (count < index) {
      node = node?.next;
      count++;
    }
    return node;
  }

  get(index: number): number {
    const node: LLNode | null = this.getNode(index);
    if (!node) return -1;
    return node.val;
  }

  addAtHead(val: number): void {
    this.head = new LLNode(val, this.head);
    this.size++;
  }

  addAtTail(val: number): void {
    if (this.size === 0) {
      this.addAtHead(val);
      return;
    }

    const node: LLNode | null = this.getNode(this.size - 1);
    if (!node) return;

    node.next = new LLNode(val, null);
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    if (index === this.size) {
      this.addAtTail(val);
      return;
    }

    const node: LLNode | null = this.getNode(index - 1);
    if (!node) return;
    node.next = new LLNode(val, node.next);
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return;
    if (this.size === 0) return;

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    const node: LLNode | null = this.getNode(index - 1);
    if (!node) return;

    node.next = node.next.next || null;
    this.size--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
