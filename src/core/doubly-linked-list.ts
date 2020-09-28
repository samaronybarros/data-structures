export interface INode<T> {
  element: T
  next: INode<T> | null
  previous: INode<T> | null
}

export type NodeOrNull<T> = INode<T> | null

export class DoublyLinkedList<T> {
  protected length = 0
  protected head: NodeOrNull<T> = null

  public Node = (element: T): INode<T> => {
    return { element, next: null, previous: null }
  }

  public getLength = () => this.length

  public isEmpty = () => !this.length

  public insertToHead = (element: T) => {
    const node = this.Node(element)

    if (this.isEmpty()) {
      this.head = node
    } else {
      node.next = this.head
      this.head!.previous = node
      this.head = node
    }

    this.length++
  }

  public insertToTail = (element: T) => {
    const node = this.Node(element)

    if (this.isEmpty()) {
      this.head = node
    } else {
      let currentNode = this.head

      while (currentNode?.next) {
        currentNode = currentNode.next
      }

      currentNode!.next = node
      node.previous = currentNode
    }

    this.length++
  }

  public insertAtPosition = (element: T, position: number) => {
    if (position >= this.length || position < 0) {
      return
    }

    if (position === 0) {
      this.insertToHead(element)
    } else if (position === this.length - 1) {
      this.insertToTail(element)
    } else {
      let list = this.head
      let previous
      let next

      while (position--) {
        previous = list
        list = list!.next
      }

      next = previous?.next

      const node = this.Node(element)

      previous.next = node
      node.previous = previous
      node.next = next
      next.previous = node

      this.length++
    }
  }

  public deleteFromHead = () => {
    if (this.isEmpty()) {
      return
    } else if (this.length === 1) {
      this.head = null
      this.length = 0
    } else {
      this.head = this.head!.next
      this.head!.previous = null
      this.length--
    }
  }

  public deleteFromTail = () => {
    if (this.isEmpty()) {
      return
    } else if (this.length === 1) {
      this.head = null
      this.length = 0
    } else {
      let list = this.head
      let previous

      while (list?.next) {
        previous = list
        list = list.next
      }

      previous.next = null
      list!.previous = null

      this.length--
    }
  }

  public deleteFirstFound = (element: T) => {
    if (this.isEmpty()) {
      return
    } else {
      let list = this.head
      let previous: NodeOrNull<T> = null

      if (list?.element === element) {
        this.head = list.next!
        list.previous = null
        this.length--
        return
      }

      while (list?.next) {
        let currentNode = list
        if (currentNode?.element !== element) {
          previous = currentNode
        }

        if (currentNode?.element === element && previous !== null) {
          previous.next = currentNode.next
          currentNode.next!.previous = previous
          this.length--
          return
        }

        list = list.next
      }

      if (list?.element === element) {
        list.previous = null
        previous!.next = list.next
        this.length--
      }
    }
  }

  public deleteAllFound = (element: T) => {
    if (this.isEmpty()) {
      return
    } else {
      let list = this.head
      let previous: NodeOrNull<T> = null

      if (list?.element === element) {
        this.head = list.next!
        list.previous = null
        this.length--
      }

      while (list?.next) {
        let currentNode = list
        if (currentNode?.element !== element) {
          previous = currentNode
        }

        if (currentNode?.element === element && previous !== null) {
          previous.next = currentNode.next
          currentNode.next!.previous = previous
          this.length--
        }

        list = list.next
      }

      if (list?.element === element) {
        list.previous = null
        previous!.next = list.next
        this.length--
      }
    }
  }

  public displayForward = () => {
    if (!this.isEmpty()) {
      let node = this.head

      process.stdout.write(`[${this.length}]  `)

      while (node!.next) {
        process.stdout.write(`${node?.element}  `)
        node = node!.next
      }
      process.stdout.write(`${node?.element}\n`)
    }
  }

  public displayBackward = () => {
    if (!this.isEmpty()) {
      let node = this.head

      process.stdout.write(`[${this.length}]  `)

      while (node!.next) {
        node = node!.next
      }

      while (node!.previous) {
        process.stdout.write(`${node?.element}  `)
        node = node!.previous
      }

      process.stdout.write(`${node?.element}\n`)
    }
  }

  public search = (element: T) => {
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

  public fromArray = (elements: T[]): DoublyLinkedList<T> => {
    elements.forEach((el: T) => this.insertToTail(el))
    return this
  }
}
