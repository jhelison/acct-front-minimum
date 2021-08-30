import { IOClients } from '@vtex/api'

import { OMS, Catalog } from '@vtex/clients'

import LeadByEmail from './leadByEmail'
import leadCLI from './leadCLI'
import VtexApi from './vtexapi'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {

  public get leadCLI() {
    return this.getOrSet('leadCLI', leadCLI)
  }

  public get OMS() {
    return this.getOrSet('OMS', OMS)
  }

  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  } 

  public get leadByEmail() {
    return this.getOrSet('leadByEmail', LeadByEmail)
  } 

  public get vtexApi() {
    return this.getOrSet('vtexApi', VtexApi)
  } 

}
