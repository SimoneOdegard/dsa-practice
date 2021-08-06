let bt = {
  root: {
    value: 55,
    left: {
      value: 2,
      left: {
        value: 60,
        left: {},
        right: {}
      },
      right: {
        value: 44,
        left: {},
        right: {}
      }
    },
    right: {
      value: 40,
      left: {
        value: 22,
        left: {},
        right: {}
      },
      right: {
        value: 51,
        left: {},
        right: {}
      }
    }
  }
}

let bst = {
  root: {
    value: 10, 
    left: {
      value: 5,
      left: {
        value: 2,
        left: {},
        right: {}
      },
      right: {
        value: 7,
        left: {},
        right: {}
      },
    },
    right: {
      value: 15,
      left: {
        value: 12,
        left: {},
        right: {}
      },
      right: {
        value: 17,
        left: {},
        right: {}
      }
    }
  }
}

// ====================  T R A V E R S E ==================== //

function traverse(tree) {
  let results = [];

  let _walk = node => {
    if (node.value) results.push(node.value);
    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);
  }
  _walk(tree.root);
  return results;
}

console.log('binary tree', traverse(bt));
console.log('binary search tree', traverse(bst));


// ====================   S E A R C H   ==================== //
// ====================       B T       ==================== //

function searchBT(tree, val) {
  let results = false;

  let _walk = node => {
    if (node.value === val) {results = true};
    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);
  }
  _walk(tree.root);
  return results;
}

console.log('BT search with true value', searchBT(bt, 51));
console.log('BT search with false value', searchBT(bt, 412397));


// ====================   S E A R C H   ==================== //
// ====================      B S T      ==================== //

function searchBST(tree, val) {
  let results = false;

  let _walk = node => {
    if (node.value === val) {results = true};
    if (node.value > val) _walk(node.left);
    if (node.value < val) _walk(node.right);
  }
  _walk(tree.root);
  return results;
}

console.log('BST search with true value', searchBST(bst, 12));
console.log('BST search with false value', searchBST(bst, 412397));