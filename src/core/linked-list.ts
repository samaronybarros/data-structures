import { List } from './list'

interface INode<T> {
  element: T
  next: INode<T> | null
}

type NodeOrNull<T> = INode<T> | null

export class LinkedList<T> extends List<T> {
  public getLength = () => this.length

  public addToLast = (element: T) => {
    const node = this.Node(element)

    if (this.head === null) {
      this.head = node
    } else {
      let currentNode = this.head

      while (currentNode.next) {
        currentNode = currentNode.next
      }

      currentNode.next = node
    }

    this.length++
  }

  public addToHead = (element: T) => {
    const node = this.Node(element)

    if (this.head === null) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }

    this.length++
  }

  public addElementAtPosition = (element: T, position: number) => {
    let previous

    if (position > this.length) {
      return
    }

    if (position === 0) {
      this.addToHead(element)
      return
    }

    const node = this.Node(element)
    let list = this.head

    while (position--) {
      previous = list
      list = list?.next!
    }

    node.next = list
    previous.next = node

    this.length++
  }

  public removeFromLast = () => {
    let previous

    if (this.head === null) {
      return
    }

    if (this.length <= 1) {
      this.head = null
      this.length = 0
      return
    }

    let last = this.head

    while (last.next) {
      previous = last
      last = last.next
    }

    previous.next = null

    this.length--
  }

  removeFromHead = () => {
    if (this.head === null) {
      return
    }

    if (this.length <= 1) {
      this.head = null
      this.length = 0
      return
    }

    let node = this.head?.next
    this.head = node!

    this.length--
  }

  public removeFirstElementFoundFromList = (element: T) => {
    if (this.head === null) {
      return
    }

    let list = this.head
    let previous: NodeOrNull<T> = null

    if (list?.element === element) {
      this.head = list.next!
      this.length--
      return
    }

    while (list.next) {
      let currentNode = list
      if (currentNode?.element !== element) {
        previous = currentNode
      }

      if (currentNode?.element === element && previous !== null) {
        previous.next = currentNode.next
        break
      }

      list = list.next
    }

    if (previous && list?.element === element) {
      previous.next = list.next
    }

    this.length--
  }

  public removeAllElementsFromList = (element: T) => {
    if (this.head === null) {
      return
    }

    while (this.head?.element === element) {
      this.head = this.head.next!
      this.length--
    }

    let list = this.head
    let previous: NodeOrNull<T> = null

    while (list?.next) {
      if (list?.element !== element) {
        previous = list
      }

      if (previous && list?.element === element) {
        previous.next = list.next
        this.length--
      }

      list = list.next
    }

    if (previous && list?.element === element) {
      previous.next = list.next
      this.length--
    }
  }

  public reverse = () => {
    if (this.head === null) {
      return
    }

    if (this.length <= 1) {
      return
    }

    let list = this.head
    let backupNode: NodeOrNull<T> = null
    let previousNode: NodeOrNull<T> = null

    while (list) {
      backupNode = list.next!
      list.next = previousNode
      previousNode = list
      list = backupNode
    }

    this.head = previousNode
  }

  public fromArray = (elements: T[]): LinkedList<T> => {
    elements.forEach((el: T) => this.addToLast(el))
    return this
  }
}
