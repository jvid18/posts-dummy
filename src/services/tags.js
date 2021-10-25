import axios from 'axios'
import { APP_ID, URL } from '../constants/apiConstants'

const baseURL = `${URL}/tag`
const defaultHeaders = {
  'app-id': APP_ID,
}

export const getAllTags = async (config = {}) => {
  const { headers, ...rest } = config

  try {
    const res = await axios.get(baseURL, {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      ...rest,
    })

    return res.data
  } catch (err) {
    console.log(err)
  }
}
