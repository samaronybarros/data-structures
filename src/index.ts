export { LinkedList } from './core/linked-list'
export { Queue } from './core/queue'
export { SortedList } from './core/sorted-list'
export { Stack } from './core/stack'
import { HashTable } from './core/hash-table'

const hash = new HashTable(200)

hash.insert('Pikachu', 'Sam')
hash.insert('Pikachu', 'Sam2')
// hash.insert('Charmander', 'Barros')
console.log(hash.search('Pikachu'))
// console.log(hash)
hash.delete('Pikachu')
console.log(hash.search('Pikachu'))
console.log(hash)
