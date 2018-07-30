import avaTest, { TestInterface } from 'ava'
import TheAnswer, { getFortytwo } from '../src/the-answer'

const test = avaTest as TestInterface<{}>

test(`The answer`, t => {
  t.is(typeof TheAnswer, 'function', 'is a function')
  t.is(TheAnswer(), 42, 'that answers all questions')
})
