import { IOClients } from '@vtex/api'

import { OMS, Catalog } from '@vtex/clients'

import Status from './status'
import Leads from './leads'
import LeadByEmail from './leadByEmail'
import SkuByProductId from './skuByProductId'
import ProductById from './productById'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {

  public get status() {
    return this.getOrSet('status', Status)
  }

  public get leads() {
    return this.getOrSet('leads', Leads)
  }

  public get leadByEmail() {
    return this.getOrSet('lead', LeadByEmail)
  }

  public get OMS() {
    return this.getOrSet('OMS', OMS)
  }

  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  } 

  public get skuByProductId() {
    return this.getOrSet('skuByProductId', SkuByProductId)
  } 

  public get productById() {
    return this.getOrSet('productById', ProductById)
  } 

}
