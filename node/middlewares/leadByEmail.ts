export async function leadByEmail(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { leadByEmail: leadByEmailClient },
  } = ctx

  const leadByEmailResponse = await leadByEmailClient.getLead("ale@mail.com")

  console.info('Status response:', leadByEmailResponse)

  const {
    headers,
    data,
    status: responseStatus,
  } = await leadByEmailClient.getLeadWithHeaders(ctx,"ale@mail.com")

  console.info('Leads headers', headers)
  console.info('Leads data:', data)

  // console.log('Headers2:', headers)

  ctx.status = responseStatus
  ctx.body = data
  ctx.set('Cache-Control', headers['cache-control'])

  await next()
  
}
