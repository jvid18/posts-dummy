import axios from 'axios'
import { APP_ID, URL } from '../constants/apiConstants'

const baseURL = `${URL}/post`
const defaultHeaders = {
  'app-id': APP_ID,
}

export const getAllPosts = async (config = {}) => {
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

export const getPostsByTag = async (tag, config = {}) => {
  const { headers, ...rest } = config

  const baseURL = `${URL}/tag/${tag}/post`

  try {
    const res = await axios.get(baseURL, {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      ...rest,
    })

    console.log(res)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
