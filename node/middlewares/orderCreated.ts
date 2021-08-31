export async function orderCreated(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const orderId = ctx.body.orderId
  const OrderClient = ctx.clients.OMS
  const LeadsClient = ctx.clients.leadByEmail

  const order = await OrderClient.order(orderId, 'AUTH_TOKEN')

  const cryptedEmail = order.clientProfileData.email

  const indexOfArroba = cryptedEmail.indexOf('@')

  const array = cryptedEmail.split('')
  const indexOfDash = array.findIndex((letter, index) => letter === '-' && index > indexOfArroba)

  const email = array.slice(0, indexOfDash).join('')

  const lead = await LeadsClient.getLead(email).catch(() => {
    return null
  });

  if (lead) {

    const isProspect = lead?.Item.status === 'prospect'

    if (isProspect) {
      const {} = await LeadsClient.patchLead(email)
    }

  }
  
  await next()
}