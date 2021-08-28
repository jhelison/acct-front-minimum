import { UserInputError } from '@vtex/api'

export async function validateLead(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
  } = ctx

  console.info('Received params:', params)

  const { email } = params

  if (!email) {
    throw new UserInputError('Email is required') // Wrapper for a Bad Request (400) HTTP Error. Check others in https://github.com/vtex/node-vtex-api/blob/fd6139349de4e68825b1074f1959dd8d0c8f4d5b/src/errors/index.ts
  }

  ctx.state.code = 200

  await next()
}
