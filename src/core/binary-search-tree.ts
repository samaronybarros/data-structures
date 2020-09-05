export interface INode<T> {
  element: T
  right: INode<T> | null
  left: INode<T> | null
}

export type NodeOrNull<T> = INode<T> | null

export class BinarySearchTree<T> {
  private length = 0
  private root: NodeOrNull<T> = null

  public Node = (element: T, right: NodeOrNull<T> = null, left: NodeOrNull<T> = null): INode<T> => {
    return { element, right, left }
  }

  public getLength = () => this.length

  public isEmpty = () => !this.length

  public insert = (element: T) => {
    const newNode = this.Node(element)
    if (this.root === null) {
      this.root = newNode
      this.length++
      return
    }

    this.insertNode(this.root, newNode)
    this.length++
  }

  private insertNode = (node: NodeOrNull<T>, newNode: NodeOrNull<T>) => {
    if (newNode?.element! < node?.element!) {
      if (node?.left === null) {
        node.left = newNode
        return
      }

      this.insertNode(node?.left!, newNode)
      return
    } else {
      if (node?.right === null) {
        node.right = newNode
        return
      }

      this.insertNode(node?.right!, newNode)
      return
    }
  }

  public search = (element: T) => {
    let current = this.root

    while (current?.element !== element) {
      if (current !== null) {
        if (current.element > element) {
          current = current.left
        } else {
          current = current.right
        }

        if (current === null) {
          return null
        }
      }
    }

    return current
  }

  public delete = (element: T) => {
    this.root = this.deleteNode(this.root, element)
    this.length--
  }

  private deleteNode = (node: NodeOrNull<T>, element: T) => {
    if (node === null) {
      return null
    }

    if (node.element > element) {
      node.left = this.deleteNode(node.left, element)
      return node
    }

    if (node.element < element) {
      node.right = this.deleteNode(node.right, element)
      return node
    }

    if (node.left === null && node.right === null) {
      node = null
      return node
    }

    if (node.left === null) {
      node = node.right
      return node
    }

    if (node.right === null) {
      node = node.left
      return node
    }

    const auxNode = this.findMaxNode(node.left)
    node.element = auxNode.element

    node.left = this.deleteNode(node.left, auxNode.element)

    return node
  }

  private findMaxNode = (node: NodeOrNull<T>) => {
    if (node?.right === null) {
      return node
    }

    return this.findMaxNode(node?.right!)
  }

  public depthFirst = () => {
    process.stdout.write(`[${this.length}]  `)
    if (this.root) {
      this.depthFirstNode(this.root)
    }
    process.stdout.write(`\n`)
  }

  private depthFirstNode = (node: NodeOrNull<T>) => {
    if (node) {
      process.stdout.write(`${node.element}  `)
      this.depthFirstNode(node.left)
      this.depthFirstNode(node.right)
    }
  }

  public fromArray = (elements: T[]) => {
    elements.forEach((element) => this.insert(element))
    return this
  }
}
