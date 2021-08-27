import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Leads extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://g0deojz10k.execute-api.us-east-2.amazonaws.com', context, options)
  }

  public async getLeads(): Promise<string> {
    return this.http.get("/items", {
      metric: 'leads-get',
    })
  }

  public async getLeadsWithHeaders(): Promise<IOResponse<string>> {
    return this.http.getRaw("/items", {
      metric: 'leads-get-raw',
      headers: {
        "X-VTEX-Use-Https": true
      }
    })
  }
}
