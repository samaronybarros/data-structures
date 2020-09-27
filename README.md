# Data Structures

JavaScript Data Structure written in TypeScript

## Summary

<!-- TOC depthfrom:2 orderedlist:false depthto:5 -->

- [Summary](#summary)
- [Installation and Usage](#installation-and-usage)
  - [Server-side:](#server-side)
    - [Typescript](#typescript)
- [Documentation](#documentation)
  - [Linked List](#linked-list)
    - [Initializer](#initializer)
    - [Methods](#methods)
      - [addToLast](#addtolast)
      - [addToHead](#addtohead)
      - [addElementAtPosition](#addelementatposition)
      - [removeFromLast](#removefromlast)
      - [removeFromHead](#removefromhead)
      - [removeFirstElementFoundFromList](#removefirstelementfoundfromlist)
      - [removeAllElementsFromList](#removeallelementsfromlist)
      - [reverse](#reverse)
      - [fromArray](#fromarray)
      - [toArray](#toarray)
      - [getLength](#getlength)
      - [isEmpty](#isempty)
      - [print](#print)
  - [Sorted List](#sorted-list)
    - [Initializer](#initializer)
    - [Methods](#methods)
      - [add](#add)
      - [removeFromLast](#removefromlast)
      - [removeFromHead](#removefromhead)
      - [removeFirstElementFoundFromList](#removefirstelementfoundfromlist)
      - [removeAllElementsFromList](#removeallelementsfromlist)
      - [fromArray](#fromarray)
      - [toArray](#toarray)
      - [getLength](#getlength)
      - [isEmpty](#isempty)
      - [print](#print)
  - [Queue](#queue)
    - [Initializer](#initializer)
    - [Methods](#methods)
      - [enqueue](#enqueue)
      - [dequeue](#dequeue)
      - [peek](#peek)
      - [getLength](#getlength)
      - [isEmpty](#isempty)
  - [Stack](#stack)
    - [Initializer](#initializer)
    - [Methods](#methods)
      - [push](#push)
      - [pop](#pop)
      - [peek](#peek)
      - [getLength](#getlength)
      - [isEmpty](#isempty)
  - [Hash Table](#hash-table)
    - [Initializer](#initializer)
    - [Methods](#methods)
      - [insert](#insert)
      - [delete](#delete)
      - [search](#search)
  - [Binary Search Tree](#binary-search-tree)
    - [Initializer](#initializer)
  - [Interfaces](#interfaces)
    - [INode](#inode)
    - [Methods](#methods)
      - [insert](#insert)
      - [delete](#delete)
      - [search](#search)
      - [getLength](#getlength)
      - [isEmpty](#isempty)
      - [fromArray](#fromarray)
- [License](#license)

<!-- /TOC -->

## Installation and Usage

### Server-side:

Using [npm](http://www.npmjs.org):

```bash
npm install sb-ds-data-structures
```

Then where needed:

#### Typescript

```typescript
import { LinkedList } from 'sb-js-data-structures'

const list = new LinkedList()

list.addToLast(1)
list.addToLast(2)
```

## Documentation

### Linked List

Creates a Linked List, a data structure where each element is a separate object and the elements are linked using pointers.

<img src="https://github.com/samaronybarros/data-structures/blob/feature/publish/docs/linked-list.png?raw=true"
     alt="Linked List"
     style="float: left; margin-right: 10px;" />

#### Initializer

```typescript
import { LinkedList } from 'sb-js-data-structures'

const list = new LinkedList()
```

#### Methods

##### addToLast

```typescript
public addToLast(element: T): void
```

###### Parameters

- **element** `T` - The element to be inserted

###### Description

Inserts an element in the ending of the Linked List.

##### addToHead

```typescript
public addToHead(element: T): void
```

###### Parameters

- **element** `T` - The element to be inserted

###### Description

Inserts an element in the beginning of the Linked List.

##### addElementAtPosition

```typescript
public addElementAtPosition(element: T, position: number): void
```

###### Parameters

- **element** `T` - The element to be inserted
- **position** `number` - position where the element should be inserted

###### Description

Inserts an element in a specific position of the Linked List, since `position` is less then the number of elements of the Linked List.

##### removeFromLast

```typescript
public removeFromLast(): void
```

###### Description

Removes the element from the ending of the Linked List.

##### removeFromHead

```typescript
public removeFromHead(): void
```

###### Description

Removes the element from the beginning of the Linked List.

##### removeFirstElementFoundFromList

```typescript
public removeFirstElementFoundFromList(element: T): void
```

###### Parameters

- **element** `T` - The element to be removed

###### Description

Removes the first element found in the Linked List.

##### removeAllElementsFromList

```typescript
public removeAllElementsFromList(element: T): void
```

###### Parameters

- **element** `T` - The element to be removed

###### Description

Removes all the elements found in the Linked List.

##### reverse

```typescript
public reverse(): void
```

###### Description

Reverse the Linked List.

##### fromArray

```typescript
public fromArray(element: T[]): void
```

###### Parameters

- **elements** `T[]` - Array of elements

###### Description

Inserts all the `elements` at the ending of the Linked List.

##### toArray

```typescript
public toArray(): T[]
```

###### Description

Creates an array with all the elements of the Linked List.

##### getLength

```typescript
public getLength(): number
```

###### Returns

- **number** - Linked List length.

###### Description

Gets the length of the Linked List.

##### isEmpty

```typescript
public isEmpty(): boolean
```

###### Returns

- **boolean** - Returns `true` if the Linked List has no elements, otherwise, returns `false`.

###### Description

Informs if the Linked List is empty.

##### print

```typescript
public isEmpty(): boolean
```

###### Description

Console log the Linked List elements.

### Sorted List

Creates a Sorted List, a data structure where each element is a separate object, the elements linked using pointers and the elements are sorted.

<img src="https://github.com/samaronybarros/data-structures/blob/feature/publish/docs/sorted-list.png?raw=true"
     alt="Sorted List"
     style="float: left; margin-right: 10px;" />

#### Initializer

```typescript
import { SortedList } from 'sb-js-data-structures'

const list = new SortedList()
```

#### Methods

##### add

```typescript
public add(element: T): void
```

###### Parameters

- **element** `T` - The element to be inserted

###### Description

Inserts an element in the Sorted List.

##### removeFromLast

```typescript
public removeFromLast(): void
```

###### Description

Removes the element from the ending of the Sorted List.

##### removeFromHead

```typescript
public removeFromHead(): void
```

###### Description

Removes the element from the beginning of the Sorted List.

##### removeFirstElementFoundFromList

```typescript
public removeFirstElementFoundFromList(element: T): void
```

###### Parameters

- **element** `T` - The element to be removed

###### Description

Removes the first element found in the Sorted List.

##### removeAllElementsFromList

```typescript
public removeAllElementsFromList(element: T): void
```

###### Parameters

- **element** `T` - The element to be removed

###### Description

Removes all the elements found in the Sorted List.

##### fromArray

```typescript
public fromArray(element: T[]): void
```

###### Parameters

- **elements** `T[]` - Array of elements

###### Description

Inserts all the `elements` at the ending of the Sorted List.

##### toArray

```typescript
public toArray(): T[]
```

###### Description

Creates an array with all the elements of the Sorted List.

##### getLength

```typescript
public getLength(): number
```

###### Returns

- **number** - Sorted List length.

###### Description

Gets the length of the Sorted List.

##### isEmpty

```typescript
public isEmpty(): boolean
```

###### Returns

- **boolean** - Returns `true` if the Sorted List has no elements, otherwise, returns `false`.

###### Description

Informs if the Sorted List is empty.

##### print

```typescript
public isEmpty(): boolean
```

### Queue

Creates a Queue, a first-in-first-out (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed.

<img src="https://github.com/samaronybarros/data-structures/blob/feature/publish/docs/queue.png?raw=true"
     alt="Queue"
     style="float: left; margin-right: 10px;" />

#### Initializer

```typescript
import { Queue } from 'sb-js-data-structures'

const queue = new Queue()
```

#### Methods

##### enqueue

```typescript
public enqueue(element: T): void
```

###### Parameters

- **element** `T` - The element to be inserted

###### Description

Inserts an element in the Queue.

##### dequeue

```typescript
public dequeue(): void
```

###### Description

Removes an element from the Queue.

##### peek

```typescript
public peek(): void
```

###### Description

Gets the element at the front of the Queue without removing it.

##### getLength

```typescript
public getLength(): number
```

###### Returns

- **number** - Queue length.

###### Description

Gets the length of the Queue.

##### isEmpty

```typescript
public isEmpty(): boolean
```

###### Returns

- **boolean** - Returns `true` if the Queue has no elements, otherwise, returns `false`.

###### Description

Informs if the Queue is empty.

### Stack

Creates a Stack, a last-in-first-out (LIFO) data structure. In a LIFO data structure, the last element added to the stack will be the first one to be removed.

<img src="https://github.com/samaronybarros/data-structures/blob/feature/publish/docs/stack.png?raw=true"
     alt="Stack"
     style="float: left; margin-right: 10px;" />

#### Initializer

```typescript
import { Stack } from 'sb-js-data-structures'

const stack = new Stack()
```

#### Methods

##### push

```typescript
public push(element: T): void
```

###### Parameters

- **element** `T` - The element to be inserted

###### Description

Inserts an element in the Stack.

##### pop

```typescript
public pop(): void
```

###### Description

Removes an element from the Stack.

##### peek

```typescript
public peek(): void
```

###### Description

Gets the last element at the Stack without removing it.

##### getLength

```typescript
public getLength(): number
```

###### Returns

- **number** - Stack length.

###### Description

Gets the length of the Stack.

##### isEmpty

```typescript
public isEmpty(): boolean
```

###### Returns

- **boolean** - Returns `true` if the Stack has no elements, otherwise, returns `false`.

###### Description

Informs if the Stack is empty.

### Hash Table

Creates a Hash Table, a data structure that stores in an array format, where each data value has its own unique index value.

<img src="https://github.com/samaronybarros/data-structures/blob/feature/publish/docs/hash-table.png?raw=true"
     alt="Hash Table"
     style="float: left; margin-right: 10px;" />

#### Initializer

```typescript
import { HashTable } from 'sb-js-data-structures'

const hash = new HashTable()
```

#### Methods

##### insert

```typescript
public insert(key: string, value: T): void
```

###### Parameters

- **key** `string` - The key
- **value** `T` - The value to be inserted

###### Description

Inserts an element in the Hash Table.

##### delete

```typescript
public delete(key: string): void
```

###### Parameters

- **key** `string` - The key

###### Description

Removes an element from the Hash Table.

##### search

```typescript
public search(key: string): void
```

###### Parameters

- **key** `string` - The key

###### Description

Searches an element in a hash table.

### Binary Search Tree

Creates a Binary Search Tree, a last-in-first-out (LIFO) data structure. In a LIFO data structure, the last element added to the tree will be the first one to be removed.

<img src="https://github.com/samaronybarros/data-structures/blob/feature/publish/docs/bst.png?raw=true"
     alt="Binary Search Tree"
     style="float: left; margin-right: 10px;" />

#### Initializer

```typescript
import { BinarySearchTree } from 'sb-js-data-structures'

const tree = new BinarySearchTree()
```

### Interfaces

#### INode

```typescript
export interface INode<T> {
  element: T
  right: INode<T> | null
  left: INode<T> | null
}
```

#### Methods

##### insert

```typescript
public insert(element: T): void
```

###### Parameters

- **element** `T` - The element to be inserted

###### Description

Inserts an element in the Binary Search Tree.

##### delete

```ts
public delete(element: T): void
```

###### Parameters

- **element** `T` - The element to be removed

###### Description

Removes an element from the Binary Search Tree.

##### search

```typescript
public search(element: T): INode
```

###### Parameters

- **element** `T` - The element to be searched

###### Description

Gets the last element at the Binary Search Tree without removing it.

###### Returns

- **INode** - The node found.

##### getLength

```typescript
public getLength(): number
```

###### Returns

- **number** - Binary Search Tree length.

###### Description

Gets the number of elements of the Binary Search Tree.

##### isEmpty

```typescript
public isEmpty(): boolean
```

###### Returns

- **boolean** - Returns `true` if the Binary Search Tree has no elements, otherwise, returns `false`.

###### Description

Informs if the Binary Search Tree is empty.

##### fromArray

```typescript
public fromArray(element: T[]): void
```

###### Parameters

- **elements** `T[]` - Array of elements

###### Description

Inserts all the `elements` in the Binary Search Tree.

## License

MIT
