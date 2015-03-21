import { main } from '../lib/component'
import { async } from 'quiver-core/promise'

import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)
const should = chai.should()

describe('unit tests', () => {
  it('basic test', async(function*() {
    const handler = yield main.loadHandler({})

    yield handler({}).should.eventually.equal('Hello World')
  }))
})