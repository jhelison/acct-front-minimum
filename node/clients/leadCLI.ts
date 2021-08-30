import { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class leadCLI extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    // const url = 'https://enkirax1pjwc.x.pipedream.net'
    const url = 'https://g0deojz10k.execute-api.us-east-2.amazonaws.com'
    super(url, context, options)
  }

  public async handler(ctx: Context, body: Object, email?: string|undefined): Promise<any> {
    let url = email ? `/lead/${email}` : `/leads`
    let method=ctx.method

    switch(method){
      case 'PUT':        
        return this.http.putRaw(url, body, {
          metric: `lead-${method.toLowerCase}`,
        })
      //Não retorna no padrão de IOResponse
      case 'PATCH':
        return {
          data: (await this.http.patch(url, body, {
            metric: `lead-${method.toLowerCase}`,
          }))
        }
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
}
