import { UserInputError } from '@vtex/api'

export async function leadValidate(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },    
  } = ctx

  // console.log("authToken:", ctx.vtex.authToken)
  console.info('Received params:', params)

  const { email } = params

  if (!email) {
    throw new UserInputError('Email is required') // Wrapper for a Bad Request (400) HTTP Error. Check others in https://github.com/vtex/node-vtex-api/blob/fd6139349de4e68825b1074f1959dd8d0c8f4d5b/src/errors/index.ts
  }

  // ctx.res.statusCode = 200;
  // const status = ctx.res.statusCode

  // // Não funcionou, pq não tem na External Client não tem metodo que retorna o atual response completo
  // // Process Request
  // const data = await client_lead.proxyLead(ctx, (email ? email as string : undefined)).catch((reason) => {
  //   // console.warn(reason)
  //   // exception_io = reason

  //   ctx.res.statusCode = reason?.response?.status

  //   return reason?.response?.data
  // });

  // const entity = (await json(ctx.req) as {    
  //   email?:string,
  //   name?:string,
  //   fone?:string,
  //   status?:string
  // })

  // console.log(entity)  
  // return
  // const leadsResponse = await client_lead.getLeads()
  // console.info('Status response:', leadsResponse)
  // console.warn('body?', raw_body, typeof(raw_body))  

  // const {
  //   headers,
  //   data,
  //   status: statusCode,
  // } = await client_lead.proxyToEndpoint(ctx, (email ? String(email) : undefined))

  // Opcao 2 Refatorada (Acabou mudando o comportamento relacao status http x endpoint original)
  // const {
  //   status,
  //   headers,
  //   data,
  // } = await client_lead.proxyLead(ctx, (email ? email as string : undefined)).catch((reason) => {
  //   return reason?.response
  // });

// ctx.state.code = statusCode
  console.info(ctx.clients.status)

  // GET
  
  // const codeNumber = parseInt(code as string, 10)
  // const res = ctx.clients.status.getStatus(CodeNumber).catch((reason) => {
  //     return reason?.response?.data
  // })

  // ctx.state.code = 422 
  // ctx.set('Cache-Control', 'no-cache no-store')
  // ctx.body = res
  // ctx.state.code = codeNumber 

  await next()
}
