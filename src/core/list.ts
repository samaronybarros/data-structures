export interface INode<T> {
  element: T
  next: INode<T> | null
}

export type NodeOrNull<T> = INode<T> | null

export class List<T> {
  protected length = 0
  protected head: NodeOrNull<T> = null

  public Node = (element: T): INode<T> => {
    return { element, next: null }
  }

  public getLength = () => this.length

  public isEmpty = () => !this.length

  public search = (element) => {
    let list = this.head
    if (list !== null) {
      let position = 0
      while (list) {
        if (list.element === element) {
          return position
        }
        position++
        list = list.next!
      }
    }
    return -1
  }

  public print = () => {
    let list = this.head

    process.stdout.write(`[${this.length}]  `)

    while (list) {
      process.stdout.write(`${list.element}  `)
      list = list.next!
    }

    process.stdout.write(`\n`)
  }

  public toArray = (): T[] => {
    const result: T[] = []
    let node = this.head
    while (node) {
      result.push(node.element)
      node = node.next!
    }
    return result
  }
}
