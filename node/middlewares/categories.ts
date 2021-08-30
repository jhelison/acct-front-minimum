// import { UserInputError } from '@vtex/api'

export async function categories(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { catalog },
  } = ctx

  const ctgs = await catalog.getCategoryById("")

  ctx.body = ctgs
  ctx.set('Cache-Control', 'no-cache no-store')

  await next()

}
