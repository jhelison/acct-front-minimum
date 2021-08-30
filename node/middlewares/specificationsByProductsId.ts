import { UserInputError } from '@vtex/api'

export async function specificationsByProductId(
  ctx: Context,
  next: () => Promise<any>
) {

  const {
    clients: {
      specificationsByProductId: specificationsByProductIdClient,
    },
    vtex: {
      route: { params },
    },
  } = ctx

  const { productid } = params

  if (!productid) {
    throw new UserInputError('Product Id is required') // Wrapper for a Bad Request (400) HTTP Error. Check others in https://github.com/vtex/node-vtex-api/blob/fd6139349de4e68825b1074f1959dd8d0c8f4d5b/src/errors/index.ts
  }

  const prodId: number = parseInt(productid as string, 10)

  const specifications = await specificationsByProductIdClient.getSpecificationsByProductId(prodId)

  if (Object.keys(specifications).length === 0) {
    ctx.body = {
      warning: 'Specifications not exists to this product id'
    }
    ctx.status = 404
  } else {
    ctx.body = specifications
  }
  ctx.set('Cache-Control', 'no-cache no-store')


  await next()

}