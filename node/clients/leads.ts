import { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

// import { Method } from 'axios';

export default class Leads extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    // const url = 'https://enkirax1pjwc.x.pipedream.net'
    const url = 'https://g0deojz10k.execute-api.us-east-2.amazonaws.com'
    super(url, context, options)
  }

  public async handler(ctx: Context, body: Object, email?: string|undefined): Promise<IOResponse<string>> {
    let url = email ? `/lead/${email}` : `/leads`
    let method=ctx.method

    switch(method){
      case 'PUT':        
        return this.http.putRaw(url, body, {
          metric: `lead-${method.toLowerCase}`,
        })
      case 'PATCH':
        return this.http.patch(url, body, {
          metric: `lead-${method.toLowerCase}`,
        })
      case 'DELETE':
        return this.http.delete(url, {
          metric: `lead-${method.toLowerCase}`,
        })
      default: //GET
        return this.http.getRaw(url, {
          metric: `lead-${method.toLowerCase}`,
        })
    }
  }

  // public async proxyLead(ctx: Context, email?: string|undefined): Promise<any>{
  //   const url = (email ? `/lead/${email}` : `/leads`)
  //   const method = ctx.method as Method
    
  //   const body = (await json(ctx.req))

  //   const data = (await this.http.getWithBody(url,body, {
  //     method: method,
  //     cacheable: 0,
  //     metric: `lead-proxy-${method}`,
  //     headers: {
  //       "X-VTEX-Use-Https": true,
  //       "Proxy-Authorization": ctx.vtex.authToken,
  //     }         
  //   }))

  //   return {
  //     data:  data
  //   }
  // }

  // public async getLead(email?: string): Promise<IOResponse<string>> {
  //   return this.http.getRaw(email? `/lead/${email}`: `/lead`, {
  //     metric: 'lead-get',
  //   })
  // }

  // public async putLead(): Promise<IOResponse<string>> {    
  //   return this.http.putRaw("/lead", {
  //     metric: 'leads-put-raw',      
  //   })
  // }

  // public async patchLead(email?: string): Promise<IOResponse<string>> {    
  //   return this.http.patch(`/lead/${email}`, {
  //     metric: 'leads-put-raw',      
  //   })
  // }

  // public async deleteLead(email?: string): Promise<IOResponse<string>> {    
  //   return this.http.patch(`/lead/${email}`, {
  //     metric: 'leads-put-raw',      
  //   })
  // }

  // public async getLeads(ctx: Context): Promise<IOResponse<string>> {
  //   console.log("authToken:", ctx.vtex.authToken)
  //   return this.http.getRaw("/leads", {
  //     metric: 'leads-get-raw',
      // headers: {
      //   "X-VTEX-Use-Https": true,
      //   "Proxy-Authorization": ctx.vtex.authToken,
      // }
  //   })
  // }

  // public async getLeads(): Promise<string> {
  //   return this.http.get("/leads", {
  //     metric: 'leads-get',
  //   })
  // }  
  
}
