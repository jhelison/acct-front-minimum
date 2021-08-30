import { UserInputError } from '@vtex/api'
import { json } from 'co-body'

export async function leadProxy(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: { 
      leadCLI: cli 
    },    
    vtex: {
      route: { params },
    },        
  } = ctx

  // Get Params from Context
  const {email} = params
  const body = (await json(ctx.req))

  // Validate
  function isValidEmail(email: string){
    return /^\S+@\S+\.\S+$/.test(email)
  }

  // Check if Email is valid
  if((email && !isValidEmail(email as string)) || (body.hasOwnProperty('email') && !isValidEmail(body.email))){
    throw new UserInputError('Email valid is required')
  }

  var exception_io = null
 
  // Do Request
  let {
    status,
    headers,
    data,
  } = await cli.handler(ctx, body, (email ? email as string : undefined)).catch((reason) => {
    exception_io = reason
    return reason?.response
  })

  // Debug
  let r = {
    exception: exception_io,
    params: {      
      email: email,
      code: code
    },
    requisicao:{
      type: ctx.method,      
    },
    resposta:{      
      status: status,     
      headers: headers, 
      // ctx_status: ctx.clients.status.getStatus,
      ctx_status: ctx.status,
      body: data,
      type_body: typeof data
    },    
    contexto: {
      ctx:ctx,
      request: ctx.request,
      // req: ctx.req,
      response: ctx.response,
      // resp: ctx.res,
    }    
  }
   
  r
  
  // console.warn(r, status, headers, data)

  // Prepare: Response
  if(!isNaN(status)){
    ctx.status = status    
  }

  ctx.body = (data ? data : JSON.stringify(data))
  ctx.set('Cache-Control', 'cache-control no-store')

  await next()
}
