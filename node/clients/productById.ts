import type { InstanceOptions, IOContext, RequestTracingConfig } from '@vtex/api'
import { JanusClient } from '@vtex/api'
import { AuthMethod } from "@vtex/clients"
import { getRequestConfig } from "./myRequest"

interface Product {
  Id: number
  Name: string
  DepartmentId: number
  CategoryId: number
  BrandId: number
  LinkId: string
  RefId: string
  IsVisible: boolean
  Description: string
  DescriptionShort: string
  ReleaseDate: Date
  KeyWords?: string
  Title: string
  IsActive: boolean
  TaxCode: string
  MetaTagDescription: string
  SupplierId?: number
  ShowWithoutStock: boolean
  AdWordsRemarketingCode: string
  LomadeeCampaignCode: string
  Score?: number
}

export default class ProductById extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
    })
  }

  public async getProductById(
    productId: number,
    authMethod: AuthMethod = 'AUTH_TOKEN',
    tracingConfig?: RequestTracingConfig
  ): Promise<Product> {
    const metric = 'catalog-getProductByIdMetric'

    return this.http.get(
      `/api/catalog/pvt/product/${productId}`, 
      getRequestConfig(this.context, authMethod, metric, tracingConfig))
  }

}
