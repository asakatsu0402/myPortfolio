// Modules
import { createContext } from 'react'
// Types
import type { searchValue } from '../interfaces/molecules/blogInterfaces'

// export const CommonFunctions = () => {
//   const commons = {

//   }

//   return {
//     commons
//   }
// }

/**
 *
 * @param name
 * @param label
 * @param regex
 * @param value
 * @param errorText
 * @param setErrorMessage
 */
export const checkValidation = (
  name: string,
  label: string,
  regex: RegExp,
  value: any,
  errorText: string,
  setErrorMessage: any
): void => {
  if (value === '') {
    setErrorMessage((errorMessage: any) => ({
      ...errorMessage,
      [name]: `${label}を入力してください。`
    }))
  } else if (!value.match(regex)) {
    setErrorMessage((errorMessage: any) => ({
      ...errorMessage,
      [name]: errorText
    }))
  } else {
    setErrorMessage((errorMessage: any) => ({
      ...errorMessage,
      [name]: ''
    }))
  }
}

/**
 *  入力した値をオブジェクトに格納する
 * @param name オブジェクトのkey
 * @param value オブジェクトのvalue
 * @param setState setState
 */
export const handleChange = (
  required: boolean,
  name: string,
  label: string,
  regex: RegExp,
  value: any,
  errorText: string,
  setErrorMessage: any,
  check: boolean,
  setState: any
): void => {
  // バリデーション
  if (required && value === '') {
    setErrorMessage((errorMessage: any) => ({
      ...errorMessage,
      [name]: `${label}を入力してください。`
    }))
  } else if (!value.match(regex)) {
    setErrorMessage((errorMessage: any) => ({
      ...errorMessage,
      [name]: errorText
    }))
  } else if (check && value !== regex) {
    setErrorMessage((errorMessage: any) => ({
      ...errorMessage,
      [name]: errorText
    }))
  } else {
    setErrorMessage((errorMessage: any) => ({
      ...errorMessage,
      [name]: ''
    }))
  }
  // POST用データを格納
  setState((state: any) => ({
    ...state,
    [name]: value
  }))
}

/**
 * 記事検索
 */
export const SearchContext = createContext<searchValue>({
  search: '',
  setSearch: () => undefined
})
