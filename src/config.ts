import { AdminApi, Configuration } from '@oryd/hydra-client'

const baseOptions: any = {}

if (process.env.MOCK_TLS_TERMINATION) {
  baseOptions.headers = { 'X-Forwarded-Proto': 'https' }
}
// using Hydra Oauth server to login user
process.env.HYDRA_ADMIN_URL = "http://127.0.0.1:4445/"

const hydraAdmin = new AdminApi(
  new Configuration({
    basePath: process.env.HYDRA_ADMIN_URL,
    baseOptions
  })
)

export { hydraAdmin }
