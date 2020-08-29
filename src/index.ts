// export { LinkedList } from './core/linked-list'
import { SortedList } from './core/sorted-list'

const list = new SortedList()
const arr = [4, 7, 5, 1, 6, 2, 4, 3, 8]

arr.forEach((el) => list.add(el))

list.removeAllElementsFromList(5)

list.print()
