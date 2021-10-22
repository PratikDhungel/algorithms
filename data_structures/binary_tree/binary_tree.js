class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  getValue() {
    return this.value;
  }
}

module.exports = Node;
