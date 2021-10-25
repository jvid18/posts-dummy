import axios from 'axios'
import { APP_ID, URL } from '../constants/apiConstants'

const baseURL = `${URL}/user`
const defaultHeaders = {
  'app-id': APP_ID,
}

export const getUserById = async (id, config = {}) => {
  const { headers, ...rest } = config
  const url = `${baseURL}/${id}`

  try {
    const res = await axios.get(url, {
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
