// Modules
import { createContext } from 'react'
import { toast } from 'react-toastify'
// Types
import type { Dispatch } from 'react'
import type { searchValue } from '../types/organism/blogInterfaces'

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
  regex: string,
  value: string,
  errorText: string,
  setErrorMessage: Dispatch<unknown>
): void => {
  if (value === '') {
    setErrorMessage((errorMessage) => ({
      ...errorMessage,
      [name]: `${label}を入力してください。`
    }))
  } else if (!value.match(new RegExp(regex))) {
    setErrorMessage((errorMessage) => ({
      ...errorMessage,
      [name]: errorText
    }))
  } else {
    setErrorMessage((errorMessage) => ({
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
  regex: string,
  value: string,
  errorText: string,
  setErrorMessage: Dispatch<unknown>,
  check: boolean,
  setState: Dispatch<unknown>
): void => {
  // バリデーション
  if (required && value === '') {
    setErrorMessage((errorMessage) => ({
      ...errorMessage,
      [name]: `${label}を入力してください。`
    }))
  } else if (!value.match(new RegExp(regex))) {
    setErrorMessage((errorMessage) => ({
      ...errorMessage,
      [name]: errorText
    }))
  } else if (check && value !== new RegExp(regex)) {
    setErrorMessage((errorMessage) => ({
      ...errorMessage,
      [name]: errorText
    }))
  } else {
    setErrorMessage((errorMessage) => ({
      ...errorMessage,
      [name]: ''
    }))
  }
  // POST用データを格納
  setState((state) => ({
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

/**
 * 処理後のレコメンドを表示
 * @param type
 * @param text
 * @param closeTiming
 * @returns
 */
export const notification = (
  type: 'info' | 'success' | 'warning' | 'error',
  text: string,
  closeTiming?: number
): React.ReactText => {
  switch (type) {
    case 'info':
      return toast.info(text, {
        theme: 'colored',
        position: 'top-right',
        autoClose: closeTiming ?? 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    case 'success':
      return toast.success(text, {
        theme: 'colored',
        position: 'top-right',
        autoClose: closeTiming ?? 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    case 'error':
      return toast.error(text, {
        theme: 'colored',
        position: 'top-right',
        autoClose: closeTiming ?? 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    case 'warning':
      return toast.warning(text, {
        theme: 'colored',
        position: 'top-right',
        autoClose: closeTiming ?? 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    default:
      return toast.info(text, {
        theme: 'colored',
        position: 'top-right',
        autoClose: closeTiming ?? 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
  }
}
