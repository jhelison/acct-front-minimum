
import { IOContext, RequestTracingConfig } from '@vtex/api'

import { AuthMethod } from "@vtex/clients"
import { getAuthToken } from './myAuthToken'
import { createTracing } from './myTracing'

export const getRequestConfig = (
  context: IOContext,
  authMethod: AuthMethod,
  metric: string,
  tracingConfig?: RequestTracingConfig
  // eslint-disable-next-line max-params
) => {
  const token = getAuthToken(context, authMethod)
  const headers: Headers = token
    ? {
        VtexIdclientAutCookie: token,
      }
    : {}

  return {
    headers,
    metric,
    tracing: createTracing(metric, tracingConfig),
  }
}

export interface Headers {
  [key: string]: string
}