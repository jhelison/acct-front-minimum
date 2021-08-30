import { UserInputError } from '@vtex/api'

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


export async function products(
  ctx: Context,
  next: () => Promise<any>
) {

  const {
    clients: { 
      skuByProductId: skuByProductIdClient,
       catalog,
       productById: productByIdClient,
       },
    vtex: {
      route: { params }, 
    },
  } = ctx

  const { categoryid } = params

  if (! categoryid) {
    throw new UserInputError('Category Id is required') // Wrapper for a Bad Request (400) HTTP Error. Check others in https://github.com/vtex/node-vtex-api/blob/fd6139349de4e68825b1074f1959dd8d0c8f4d5b/src/errors/index.ts
  }

  const CatId : number = parseInt( categoryid as string, 10)

  const { data } = await catalog.getProductsAndSkus(1)

  let jsonGenerated: any = []

  let prodId: number
  for (let [key] of Object.entries(data)) {
    prodId = parseInt( key as string, 10)

    const { 
      Id, 
      Name,
      CategoryId,
      IsVisible,
      Description,
      Title,
      IsActive,
      MetaTagDescription
    } = await productByIdClient.getProductById( prodId )

    if( IsActive && IsVisible && CategoryId === CatId) {

      const { 
        available,
        skus
      } = await skuByProductIdClient.getSkuByProductId( prodId )

      const newSkus = skus.map( (item: Sku) => {
        return {
          skuId: item.sku,
          skuName: item.skuname,
          skuAvailable: item.available,
          skuListPriceFormated: item.listPriceFormated,
          skuListPrice: item.listPrice,
          skuTaxFormated: item.taxFormated,
          skuTaxAsInt: item.taxAsInt,
          skuBestPriceFormated: item.bestPriceFormated,
          skuBestPrice: item.bestPrice,
          skuSpotPrice: item.spotPrice,
          skuInstallments: item.installments,
          skuInstallmentsValue: item.installmentsValue,
          skuInstallmentsInsterestRate: item.installmentsInsterestRate,
          skuImage: item.image
        }
        
      } )

      const newProd = {
        Id, 
        Name,
        CategoryId,
        IsVisible,
        Description,
        Title,
        IsActive,
        MetaTagDescription,
        available,
        skus: newSkus
      }

      jsonGenerated.push(newProd)

    }

    if( Object.keys( jsonGenerated ).length === 0 ) {
      ctx.status = 404
    }
    ctx.body = jsonGenerated
    ctx.set('Cache-Control', 'no-cache no-store')

  }

  await next()
}