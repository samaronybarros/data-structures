import { List, NodeOrNull } from './list'

export class SortedList<T> extends List<T> {
  public add(element: T) {
    const node = this.Node(element)

    if (this.head === null) {
      this.head = node
      this.length++
      return
    }

    let currentNode = this.head

    if (this.length === 1) {
      if (element > currentNode.element) {
        this.head.next = node
        this.length++
        return
      }

      node.next = this.head
      this.head = node
      this.length++
      return
    }

    if (element < currentNode.element) {
      this.head = node
      node.next = currentNode
      this.length++
      return
    }

    while (currentNode.next) {
      if (element >= currentNode.element && element <= currentNode.next.element) {
        const next = currentNode.next
        currentNode.next = node
        node.next = next
        this.length++
        return
      }

      currentNode = currentNode.next
    }

    currentNode.next = node
    this.length++
    return
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
    this.head = node

    this.length--
  }

  public removeFirstElementFoundFromList = (element: T) => {
    if (this.head === null) {
      return
    }

    let list = this.head
    let previous: NodeOrNull<T> = null

    if (list.element === element) {
      this.head = list.next
      this.length--
      return
    }

    while (list.next) {
      let currentNode = list
      if (currentNode.element !== element) {
        previous = currentNode
      }

      if (currentNode.element === element && previous !== null) {
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

    while (this.head.element === element) {
      this.head = this.head.next!
      this.length--
    }

    let list = this.head
    let previous: NodeOrNull<T> = null

    while (list.next) {
      if (list.element !== element) {
        previous = list
      }

      if (previous && list.element === element) {
        while (list.element === element) {
          previous.next = list.next
          this.length--
          if (list.next) {
            list = list.next
          }
        }
        break
      }

      list = list.next!
    }

    if (previous && list?.element === element) {
      previous.next = list.next
      this.length--
    }
  }
}
