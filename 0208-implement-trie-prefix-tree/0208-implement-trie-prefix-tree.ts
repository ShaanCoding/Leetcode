class TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.isEnd = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let traversalNode: TrieNode = this.root;

    for (const char of word) {
      if (!traversalNode.children.has(char)) {
        traversalNode.children.set(char, new TrieNode());
      }
      traversalNode = traversalNode.children.get(char);
    }
    traversalNode.isEnd = true;
  }

  search(word: string): boolean {
    let traversalNode: TrieNode = this.root;

    for (const char of word) {
      if (!traversalNode.children.has(char)) {
        return false;
      }

      traversalNode = traversalNode.children.get(char);
    }

    return traversalNode.isEnd;
  }

  startsWith(prefix: string): boolean {
    let traversalNode: TrieNode = this.root;

    for (const char of prefix) {
      if (!traversalNode.children.has(char)) {
        return false;
      }

      traversalNode = traversalNode.children.get(char);
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
