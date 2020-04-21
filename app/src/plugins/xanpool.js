import log from 'loglevel'

import config from '../config'
import { post } from '../utils/httpHelpers'

const postQuote = (requestObject, headers) => {
  try {
    const options = {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
      },
    }
    return post(`${config.xanpoolApiQuoteHost}`, requestObject, options)
  } catch (error) {
    log.error(error)
  }
  return undefined
}
export default postQuote
