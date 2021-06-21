// Modules
import cheerio from 'cheerio'

export const CommonFunctions = () => {

  const commons = {
    /**
     * 目次を作成する
     * @param body
     * @param setState
     */
    createContents: (body: any) => {
      const $ = cheerio.load(body)
      const headings = $('h1, h2, h3, h4').toArray()
      return headings.map((head: any) => ({
        text: head.children[0].data,
        id: head.attribs.id,
        name: head.name
      }))
    },
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
    },
  }

  return {
    commons
  }
}