// Modules
import { createContext } from 'react'

// Interfaces
import { searchValue } from '../interfaces/molecules/blogInterfaces'

export const CommonFunctions = () => {
  const commons = {
    /**
     * 入力内容にバリデーションをかける
     * @param name
     * @param label
     * @param regex
     * @param value
     * @param errorText
     * @param setErrorMessage
     */
    checkValidation: (
      name: string,
      label: string,
      regex: any,
      value: any,
      errorText: string,
      setErrorMessage: Function
    ) => {
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
  }

  return {
    commons
  }
}
/**
 * 記事検索
 */
export const SearchContext = createContext<searchValue>({
  search: '',
  setSearch: () => undefined
})
