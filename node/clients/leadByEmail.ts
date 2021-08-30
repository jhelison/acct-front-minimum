import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

interface Lead {
  customerAt: any
  status: 'prospect' | 'client'
  createdAt: number
  lastUpdatedAt: number
  email: string
  name: string
  fone: string
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

  public async getLead(email: string): Promise<Lead> {
    return this.http.get(`/lead/${email}`, {
      metric: 'leads-get',
    })
  }

  public async patchLead(email: string): Promise<Lead> {
    return this.http.patch(`/lead/${email}`, {
      "status": "customer"
    })
  }




}
