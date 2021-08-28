import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
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
      // https://github.com/vtex-apps/yotpo-integration/blob/bf52a9af95fdf0160d5c804218fcc0691bdeec02/node/clients/yotpo.ts
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

  public async getLeadsWithHeaders(ctx: Context): Promise<IOResponse<string>> {
    console.log("authToken:", ctx.vtex.authToken)
    return this.http.getRaw("/leads", {
      metric: 'leads-get-raw',
      headers: {
        "X-VTEX-Use-Https": true,
        "Proxy-Authorization": ctx.vtex.authToken,
      }
    })
  }
}
