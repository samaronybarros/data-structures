import * as chai from 'chai'
import { Stack } from '../core/stack'

const expect = chai.expect

describe('Stack', () => {
  describe('Push', () => {
    it('Should add an element to the stack', () => {
      const stack = new Stack()

      stack.push(2)

      expect(stack.peek()).to.equal(2)
      expect(stack.getLength()).to.equal(1)
    })

    it('Should add all element to the stack', () => {
      const stack = new Stack()

      stack.push(1)
      stack.push(2)
      stack.push(3)

      expect(stack.peek()).to.equal(3)
      expect(stack.getLength()).to.equal(3)
    })
  })

  describe('Peek', () => {
    it('Should get the last element inserted in the stack', () => {
      const stack = new Stack()

      stack.push(1)
      stack.push(2)
      stack.push(3)

      expect(stack.peek()).to.equal(3)
      expect(stack.getLength()).to.equal(3)
    })
  })

  describe('Empty', () => {
    it('Should show true when stack is empty', () => {
      const stack = new Stack()

      expect(stack.isEmpty()).to.be.true
    })

    it('Should show false when stack is not empty', () => {
      const stack = new Stack()

      stack.push(1)

      expect(stack.isEmpty()).to.be.false
    })
  })

  describe('Pop', () => {
    it('Should pop the last element inserted in the stack', () => {
      const stack = new Stack()

      stack.push(1)
      stack.push(2)
      stack.push(3)

      expect(stack.pop()).to.equal(3)
      expect(stack.getLength()).to.equal(2)
    })

    it('Should not pop when stack is empty', () => {
      const stack = new Stack()

      expect(stack.pop()).to.equal(null)
      expect(stack.getLength()).to.equal(0)
    })

    it('Should pop while stack is not empty', () => {
      const stack = new Stack()

      stack.push(1)
      stack.push(2)
      stack.push(3)

      while (!stack.isEmpty()) {
        stack.pop()
      }

      expect(stack.pop()).to.equal(null)
      expect(stack.getLength()).to.equal(0)
    })
  })
})
