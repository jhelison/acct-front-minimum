export async function status(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: {
      status: statusClient, catalog,
      skuByProductId: skuByProductIdClient,
      productById: productByIdClient,
      leads: leadsClient
    },
  } = ctx

  console.info('Received code:', code)

  // const statusResponse = await statusClient.getStatus(code).catch((reason) => {
  //   return reason?.response?.data
  // })

  // console.info('Status response:', statusResponse)


  // const ids = await productsIdsClient.getProductIds(1).catch((reason) => {
  //   return { headers: reason.response.headers, data: reason.response.data, status: reason.response.status}
  // })

  const categories = await catalog.getCategoryById("").catch((reason) => {
    console.info("status categorias = ", reason.reponse.status)
    return reason.response.data
  })

  console.info("categories = ", categories)

  const { data:datar, range } = await catalog.getProductsAndSkus(1)

  console.info("so o data--> ",datar)
  console.info("so o range--> ",range)
 

  for (let [key, value] of Object.entries(datar)) {
    console.log(`ignorou: ${key} --> ${value}`)
  }

  const product = await skuByProductIdClient.getSkuByProductId(2)

  console.info("product = ", product)

  // const product2 = await catalog.getSkuById("2").catch((reason) => {
  //   console.info("status product2 = ", reason.reponse.status)
  //   return reason.response.data
  // })

  // console.info("product2 = ", product2)

  console.info("eita teste---> ", product.skus[0].bestPriceFormated)

  const product2 = await productByIdClient.getProductById(2)

  console.info("product2 = ", product2)

  console.info("teste: ---> ", product2.KeyWords)

  const leads = await leadsClient.getLeads()
  console.info("leads ---> ", leads)
  console.info("leads email --->", leads.Items[0].email)



  const {
    headers,
    data,
    status: responseStatus,
  } = await statusClient.getStatusWithHeaders(code).catch((reason) => {
    return { headers: reason.response.headers, data: reason.response.data, status: reason.response.status }
  })


  console.info('Status headers', headers)
  console.info('Status data:', data)
  // console.log('Status data:', data)

  ctx.status = responseStatus
  ctx.body = status
  ctx.set('Cache-Control', 'no-cache no-store')

  await next()
}
