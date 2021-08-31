import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

interface Lead {
  customerAt: number
  status: string
  createdAt: number
  lastUpdatedAt: number
  email: string
  name: string
  fone: string
}

interface Item { 
  Item: Lead
}

export default class LeadByEmail extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://g0deojz10k.execute-api.us-east-2.amazonaws.com', context, {
      ...options,
      headers: {
        'X-VTEX-Use-Https': 'true',
        'Proxy-Authorization': context.authToken,
      }
    })
  }

  public async getLead(email: string): Promise<Item> {
    return this.http.get(`/lead/${email}`, {
      metric: 'lead-get',
    })
  }

  public async getLeadWithHeaders(
    email: string
  ): Promise<IOResponse<Item>> {
    return this.http.getRaw(`/lead/${email}`, {
      metric: 'lead-get-raw',
    })
  }

  public async patchLead(email: string): Promise<Item> {
    return this.http.patch(`/lead/${email}`, {
      "status": "customer"
    })
  }




}
