import type { InstanceOptions, IOContext, RequestTracingConfig } from '@vtex/api'
import { JanusClient } from '@vtex/api'
import { AuthMethod } from "@vtex/clients"
import { getRequestConfig } from "./myRequest"

interface Specification {
  Name: string
  Value: string
}

export default class SpecificationsByProductId extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
    })
  }

  public async getSpecificationsByProductId(
    productId: number,
    authMethod: AuthMethod = 'AUTH_TOKEN',
    tracingConfig?: RequestTracingConfig
  ): Promise<{ items: Specification[] }> {
    const metric = 'catalog-getSpecificationsByProductIdMetric'

    return this.http.get(
      `/api/catalog_system/pvt/products/${productId}/specification`, 
      getRequestConfig(this.context, authMethod, metric, tracingConfig))
  }

}
