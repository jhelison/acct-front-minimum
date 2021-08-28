export async function leads(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { leads: leadsClient },
  } = ctx

  const leadsResponse = await leadsClient.getLeads()

  console.info('Status response:', leadsResponse)

  const {
    headers,
    data,
    status: responseStatus,
  } = await leadsClient.getLeadsWithHeaders(ctx)

  console.info('Leads headers', headers)
  console.info('Leads data:', data)

  // console.log('Headers2:', headers)

  ctx.status = responseStatus
  ctx.body = data
  ctx.set('Cache-Control', 'no-cache no-store')

  await next()
}
