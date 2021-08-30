import { IOClients } from '@vtex/api'

import { OMS, Catalog } from '@vtex/clients'

import VtexApi from './vtexapi'

export class Clients extends IOClients {


  public get OMS() {
    return this.getOrSet('OMS', OMS)
  }

  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  } 

  public get vtexApi() {
    return this.getOrSet('vtexApi', VtexApi)
  } 

}
