import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Leads extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://g0deojz10k.execute-api.us-east-2.amazonaws.com', context, options)
  }

  public async getLeads(): Promise<string> {
    return this.http.get("/leads", {
      metric: 'leads-get',
    })
  }

  public async getLeadsWithHeaders(ctx: Context): Promise<IOResponse<string>> {
    return this.http.getRaw("/leads", {
      metric: 'leads-get-raw',
      headers: {
        "X-VTEX-Use-Https": true,
        "Proxy-Authorization": ctx.authToken,
      }
    })
  }
}
