import type { InstanceOptions, IOContext, RequestTracingConfig } from '@vtex/api'
import { JanusClient } from '@vtex/api'
import { AuthMethod } from "@vtex/clients"
import { getRequestConfig } from "./myRequest"

// import { getRequestConfig } from 'clients/utils/request'

interface Sku {
  sku: number
  skuname: string
  dimensions: any
  available: boolean
  availablequantity: number
  cacheVersionUsedToCallCheckout: string
  listPriceFormated: string
  listPrice: number
  taxFormated: string
  taxAsInt: string
  bestPriceFormated: string
  bestPrice: number
  spotPrice: number
  installments: number
  installmentsValue: number
  installmentsInsterestRate: number
  image: string
  sellerId: string
  seller: string
  measures: any
  unitMultiplier: number
  rewardValue: number
}

interface ProductSku {
  productId: number
  name: string
  salesChannel: string
  available: boolean
  displayMode: string
  dimensions: any
  dimensionsInputType: any
  dimensionsMap: any
  skus: Sku[]
}

export default class SkuByProductId extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
    })
  }

  public async getSkuByProductId(
    productId: number,
    authMethod: AuthMethod = 'AUTH_TOKEN',
    tracingConfig?: RequestTracingConfig
  ): Promise<ProductSku> {
    const metric = 'catalog-getSkusByProductsIdsMetric'

    return this.http.get(
      `/api/catalog_system/pub/products/variations/${productId}`, 
      getRequestConfig(this.context, authMethod, metric, tracingConfig))
  }

}
