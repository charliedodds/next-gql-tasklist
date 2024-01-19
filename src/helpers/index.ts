import { Status } from '@/types'

export const convertUrlToFilter = (url: string | string[]) => {
  /**
   * Usually you would want to handle arrays better
   * but using a fallback means url should only be our accepted statuses
   * i.e 'new' | 'completed' | 'offer-accepted'
   */
  const urlToConvert = Array.isArray(url) ? url[0] : url
  return urlToConvert
    .replace('-', '_')
    .split('')
    .map((char) => char.toUpperCase())
    .join('') as Status
}
