import { simpleHandler } from 'quiver-core/component'

export let main = simpleHandler(
  args => 'Hello World',
  'void', 'text')