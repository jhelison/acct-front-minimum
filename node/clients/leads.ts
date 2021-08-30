import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

interface Lead {
  status: 'prospect' | 'client'
  createdAt: number
  lastUpdatedAt: number
  email: string
  name: string
  fone: string
}

export default class Leads extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://g0deojz10k.execute-api.us-east-2.amazonaws.com', context, {
      ...options,
      headers: {
        'X-VTEX-Use-Https': 'true',
        'Proxy-Authorization': context.authToken,
      }
    })
  }

  public async getLeads(): Promise<{ Items: Lead[]}> {
    return this.http.get("/leads", {
      metric: 'leads-get',
    })
  }

}
