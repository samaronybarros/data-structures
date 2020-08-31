export class Stack<T> {
  private length = 0
  private storage = {}

  public getLength = () => this.length

  public peek = () => this.storage[this.length - 1]

  public isEmpty = () => this.length === 0

  public push = (element: T) => {
    this.storage[this.length] = element
    this.length++
  }

  public pop = () => {
    if (this.isEmpty()) {
      return null
    }

    const lastElement = this.peek()
    delete this.storage[this.length - 1]
    this.length--
    return lastElement
  }
}
