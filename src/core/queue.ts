export class Queue<T> {
  private length = 0
  private queue: T[] = []

  public isEmpty = () => this.length === 0

  public getLength = () => this.length

  public enqueue = (element: T) => {
    this.queue[this.length] = element
    this.length++
  }

  public dequeue = () => {
    if (this.isEmpty()) {
      return null
    }

    const firstElement = this.queue[0]
    for (let i = 0; i < this.length - 1; i++) {
      this.queue[i] = this.queue[i + 1]
    }

    this.length--
    this.queue.length = this.length
    return firstElement
  }

  public peek = () => this.queue[0]
}
