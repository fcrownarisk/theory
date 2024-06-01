import 'lft'
import 'rgt'
type Tree:
  Node { ~lft, ~rgt }
  Leaf { val }
tree = Tree/Node {
  lft: Tree/Node { lft: Tree/Leaf { val: 1 }, rgt: Tree/Leaf { val: 2 } },
  rgt: Tree/Node { lft: Tree/Leaf { val: 3 }, rgt: Tree/Leaf { val: 4 } }
}