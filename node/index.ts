import type { ClientsConfig, ServiceContext, RecorderState, EventContext } from '@vtex/api'
// import { LRUCache, method, Service } from '@vtex/api'
import { method, Service } from '@vtex/api'

import { Clients } from './clients'
import { status } from './middlewares/status'
import { validate } from './middlewares/validate'
import { leads } from './middlewares/leads'
import { orderCreated } from './middlewares/orderCreated'
import { leadByEmail } from './middlewares/leadByEmail'

const TIMEOUT_MS = 1800

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
// const memoryCache = new LRUCache<string, any>({ max: 5000 })

// metrics.trackCache('status', memoryCache)

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<Clients> = {
  // We pass our custom implementation of the clients bag, containing the Status client.
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    // This key will be merged with the default options and add this cache to our Status client.
    // status: {
    //   memoryCache,
    // },
  },
}

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients, State>

  interface StatusChangeContext extends EventContext<Clients> {
    body: {
      domain: string
      orderId: string
      currentState: string
      lastState: string
      currentChangeDate: string
      lastChangeDate: string
    }
  }

  // The shape of our State object found in `ctx.state`. This is used as state bag to communicate between middlewares.
  interface State extends RecorderState {
    code: number
  }
}

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  routes: {
    // `status` is the route ID from service.json. It maps to an array of middlewares (or a single handler).
    status: method({
      GET: [validate, status],
    }),
    // `status` is the route ID from service.json. It maps to an array of middlewares (or a single handler).
    leads: method({
      GET: [leads],
    }),
    lead: method({
      GET: [leadByEmail],
    }),
  },
  events: {
    orderCreated
  }
})
