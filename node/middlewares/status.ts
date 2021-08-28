export async function status(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: { status: statusClient },
  } = ctx

  console.info('Received code:', code)

  const statusResponse = await statusClient.getStatus(code).catch((reason) => {
    return reason?.response?.data
  })

  console.info('Status response:', statusResponse)

  const {
    headers,
    data,
    status: responseStatus,
  } = await statusClient.getStatusWithHeaders(code)

  console.info('Status headers', headers)
  console.info('Status data:', data)
  // console.log('Status data:', data)

  ctx.status = responseStatus
  ctx.body = statusResponse
  ctx.set('Cache-Control', 'no-cache no-store')

  await next()
}
