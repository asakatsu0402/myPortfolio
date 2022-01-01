// Modules
import axios from 'axios'
// Config
const API_KEY: string = process.env.API_KEY || ''

// 言語
export const languages = [
  { code: 'en', language: 'English' },
  { code: 'ja', language: '日本' }
  // { code: 'zh-HANT', language: '中国（繁體字）' },
  // { code: 'zh-HANS', language: '中国（簡化字）' },
  // { code: 'ko', language: '대한민국' }
]

/**
 * 動的にaxiosを生成する
 */
export const globalAxios = axios.create({
  headers: {
    'Content-type': 'application/json',
    'X-API-KEY': API_KEY
  }
})
