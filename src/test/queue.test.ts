import * as chai from 'chai'
import { Queue } from '../core/queue'

const expect = chai.expect

describe('Queue', () => {
  describe('enqueue', () => {
    it('Should add an element to the queue', () => {
      const queue = new Queue()

      queue.enqueue(2)

      expect(queue.peek()).to.equal(2)
      expect(queue.getLength()).to.equal(1)
    })

    it('Should add all elements to the queue', () => {
      const queue = new Queue()

      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)

      expect(queue.peek()).to.equal(1)
      expect(queue.getLength()).to.equal(3)
    })
  })

  describe('Peek', () => {
    it('Should get the first element inserted in the queue', () => {
      const queue = new Queue()

      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)

      expect(queue.peek()).to.equal(1)
      expect(queue.getLength()).to.equal(3)
    })
  })

  describe('Empty', () => {
    it('Should show true when queue is empty', () => {
      const queue = new Queue()

      expect(queue.isEmpty()).to.be.true
    })

    it('Should show false when queue is not empty', () => {
      const queue = new Queue()

      queue.enqueue(1)

      expect(queue.isEmpty()).to.be.false
    })
  })

  describe('Dequeue', () => {
    it('Should remove the first element inserted in the queue', () => {
      const queue = new Queue()

      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)

      expect(queue.dequeue()).to.equal(1)
      expect(queue.getLength()).to.equal(2)
    })

    it('Should not dequeue when queue is empty', () => {
      const queue = new Queue()

      expect(queue.dequeue()).to.equal(null)
      expect(queue.getLength()).to.equal(0)
    })

    it('Should dequeue while queue is not empty', () => {
      const queue = new Queue()

      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)

      while (!queue.isEmpty()) {
        queue.dequeue()
      }

      expect(queue.dequeue()).to.equal(null)
      expect(queue.getLength()).to.equal(0)
    })
  })
})
