if (!process.env.REACT_APP_DUMMY_URL || !process.env.REACT_APP_DUMMY_APP_ID) {
  throw new Error('API URL and API ID most be defined')
}

export const URL = process.env.REACT_APP_DUMMY_URL
export const APP_ID = process.env.REACT_APP_DUMMY_APP_ID
