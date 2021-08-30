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

    console.log(`Email ${email} mostrado significa evento recebido`)

    const lead = await LeadsClient.getLead(email)
    
    if (!lead) {
        console.log(`Email ${email} não é lead!!`)

        return
    }

    const isProspect = lead.status === 'prospect'

    if (isProspect) {
        // Implementar chamada para atualizar de prospect para client na aws
        const teste = await LeadsClient.patchLead(email)

        console.info("teste ==> ",teste)
    }

    console.log(`Email recebido: ${email}`)
    console.log(`Lead é: ${JSON.stringify(lead)}`)
    console.log(`É prospect: ${isProspect}`)

    await next()
  }