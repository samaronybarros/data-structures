import * as chai from 'chai'
import { BinarySearchTree } from '../core/binary-search-tree'

const expect = chai.expect

describe('Binary Search Tree', () => {
  describe('Insert', () => {
    it('Should insert a value to root', () => {
      const tree = new BinarySearchTree()

      tree.insert(27)

      const root = tree.search(27)

      expect(root?.element).to.equal(27)
      expect(root?.left).to.equal(null)
      expect(root?.right).to.equal(null)
      expect(tree.getLength()).to.equal(1)
    })

    it('Should insert a value as left root child', () => {
      const tree = new BinarySearchTree()

      tree.insert(27)
      tree.insert(14)

      const root = tree.search(27)

      expect(tree.search(14)?.element).to.equal(14)
      expect(root?.left?.element).to.equal(14)
      expect(root?.right).to.equal(null)
      expect(tree.getLength()).to.equal(2)
    })

    it('Should insert a value as right root child', () => {
      const tree = new BinarySearchTree()

      tree.insert(27)
      tree.insert(14)
      tree.insert(35)

      const root = tree.search(27)

      expect(tree.search(14)?.element).to.equal(14)
      expect(root?.left?.element).to.equal(14)
      expect(root?.right?.element).to.equal(35)
      expect(tree.getLength()).to.equal(3)
    })

    it('Should insert a value as right if they are equal', () => {
      const tree = new BinarySearchTree()

      tree.insert(27)
      tree.insert(27)

      const root = tree.search(27)

      expect(root?.element).to.equal(27)
      expect(root?.left).to.equal(null)
      expect(root?.right?.element).to.equal(27)
      expect(tree.getLength()).to.equal(2)
    })
  })

  describe('Delete', () => {
    it('Should delete a leaf', () => {
      const tree = new BinarySearchTree()

      tree.fromArray([27, 14, 35, 10, 19, 31, 42])

      tree.delete(19)

      const leaf = tree.search(19)
      const node = tree.search(14)

      expect(leaf).to.be.null
      expect(node?.left?.element).to.equal(10)
      expect(node?.right).to.equal(null)
      expect(tree.getLength()).to.equal(6)
    })

    it('Should delete a node', () => {
      const tree = new BinarySearchTree()

      tree.fromArray([27, 14, 35, 10, 19, 31, 42])

      tree.delete(14)

      const root = tree.search(27)
      const node = tree.search(14)

      expect(node).to.be.null
      expect(root?.element).to.equal(27)
      expect(root?.left?.element).to.equal(10)
      expect(root?.right?.element).to.equal(35)
      expect(tree.getLength()).to.equal(6)
    })

    it('Should delete the root', () => {
      const tree = new BinarySearchTree()

      tree.fromArray([27, 14, 35, 10, 19, 31, 42])

      tree.delete(27)

      const oldRoot = tree.search(27)
      const newRoot = tree.search(19)

      expect(oldRoot).to.be.null
      expect(newRoot?.element).to.equal(19)
      expect(newRoot?.left?.element).to.equal(14)
      expect(newRoot?.right?.element).to.equal(35)
      expect(tree.getLength()).to.equal(6)
    })
  })
})
