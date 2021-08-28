import { IOClients } from '@vtex/api'

import { OMS } from '@vtex/clients'

import Status from './status'
import Leads from './leads'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {

  public get status() {
    return this.getOrSet('status', Status)
  }

  public get leads() {
    return this.getOrSet('leads', Leads)
  }
  
  public get OMS() {
    return this.getOrSet('OMS', OMS)
  }

}
