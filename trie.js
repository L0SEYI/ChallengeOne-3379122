// TrieNode class to represent each character node
class TrieNode {
  constructor() {
    this.children = {}; // char -> TrieNode
    this.isEndOfWord = false; // true if a word ends here
  }
}

// Trie class with insert, search, startsWith methods
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this._findNode(word);
    return node !== null && node.isEndOfWord;
  }

  startsWith(prefix) {
    return this._findNode(prefix) !== null;
  }

  _findNode(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }
    return node;
  }
}

// === Example Usage ===

const methods = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"];
const inputs =  [[],     ["apple"], ["apple"], ["app"],     ["app"],     ["app"], ["app"]];
const output = [];

let trie = null;

methods.forEach((method, i) => {
  if (method === "Trie") {
    trie = new Trie();
    output.push(null);
  } else {
    const result = trie[method](...inputs[i]);
    output.push(result === undefined ? null : result);
  }
});

console.log(output); 