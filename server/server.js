import 'quiver-core/traceur'
import { startServer } from 'quiver-core/http'

import { config } from './config'
import { main } from '../lib/component'

startServer(main, config)
.then(server => {
  console.log('Server running at port 8080...')
})
.catch(err => {
  console.log('error starting server:', err.stack)
})