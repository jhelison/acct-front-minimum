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

interface Specification {
  Value: string
  Name: string
  Id: number
}

interface specDetails {
  Name: string
  CategoryId: number
  FieldId: number
  IsActive: boolean
  IsRequired: boolean
  FieldTypeId: number
  FieldTypeName: string
  FieldValueId: any
  Description: string
  IsStockKeepingUnit: boolean
  IsFilter: boolean
  IsOnProductDetails: boolean
  Position: number
  IsWizard: boolean
  IsTopMenuLinkActive: boolean
  IsSideMenuLinkActive: boolean
  DefaultValue: any
  FieldGroupId: number
  FieldGroupName: string
}

export default class VtexApi extends JanusClient {
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

  public async getSpecificationsDetails(
    fieldId: number,
    authMethod: AuthMethod = 'AUTH_TOKEN',
    tracingConfig?: RequestTracingConfig
  ): Promise<specDetails> {
    const metric = 'catalog-getSpecificationsDetailsMetric'

    return this.http.get(
      `/api/catalog_system/pub/specification/fieldGet/${fieldId}`, 
      getRequestConfig(this.context, authMethod, metric, tracingConfig))
  }

}
