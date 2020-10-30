const KEY = 0
const VALUE = 1

export class HashTable<T> {
  private size
  private buckets

  constructor(size: number = 42) {
    this.buckets = new Array(size)
    this.size = size
  }

  public hash = (key: string) => {
    let hash = 0
    if (key.length == 0) {
      return hash
    }

    for (var i = 0; i < key.length; i++) {
      var char = key.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash // Convert to 32bit integer
    }

    return hash % this.size
  }

  public insert = (key: string, value: T) => {
    const index = this.hash(key)

    if (!this.buckets[index]) {
      this.buckets[index] = []
    }

    this.buckets[index].push([key, value])
  }

  public search = (key: string) => {
    const index = this.hash(key)

    if (!this.buckets[index]) return null

    for (let bucket of this.buckets[index]) {
      if (bucket && bucket[KEY] === key) {
        return bucket[VALUE]
      }
    }
  }

  public delete = (key: string) => {
    const index = this.hash(key)
    const arrayAtIndex = this.buckets[index]

    if (!arrayAtIndex) {
      return
    }

    for (let i = 0; i < arrayAtIndex.length; i++) {
      const pair = arrayAtIndex[i]

      if (pair[KEY] === key) {
        delete arrayAtIndex[i]
        break
      }
    }
  }
}
