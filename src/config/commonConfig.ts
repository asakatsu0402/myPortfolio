// Modules
import axios from 'axios'
// Config
const API_KEY: string = process.env.API_KEY || ''

/**
 * 動的にaxiosを生成する
 */
export const globalAxios = axios.create({
  headers: {
    'Content-type': 'application/json',
    'X-API-KEY': API_KEY
  }
})
