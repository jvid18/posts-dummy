if (
  !process.env.REACT_APP_AUTH0_DOMAIN ||
  !process.env.REACT_APP_AUTH0_CLIENT_ID
) {
  throw new Error('domain and client id most be defined')
}

export const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN
export const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID
