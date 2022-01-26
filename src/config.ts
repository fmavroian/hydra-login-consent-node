import { AdminApi, Configuration } from '@oryd/hydra-client'
const dotenv = require('dotenv');
dotenv.config();
const baseOptions: any = {}

if (process.env.MOCK_TLS_TERMINATION) {
  baseOptions.headers = { 'X-Forwarded-Proto': 'https' }
}

const hydraAdmin = new AdminApi(
  new Configuration({
    basePath: process.env.HYDRA_ADMIN_URL,
    baseOptions
  })
)

export { hydraAdmin }
