import {assert} from 'chai'

import sum from '../src/sum'

describe('sum', () => {
  it('should 2 + 2 return 4', () => {
    assert.equal(sum(2,2), 4)
  })
})