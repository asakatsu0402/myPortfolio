// Types
import type { RootState } from '..'
import type { languageType } from '../stores/language'

// 言語選択をモーダルの状態を取得するSelector
export const languageSelector = (state: RootState): languageType => state.language

// /**
//  * 企業名を取得する
//  * @returns name
//  */
// export const userNameSelector = createSelector(userSelector, (user) => {
//   return user.name
// })

// /**
//  * ユーザーIDを取得する
//  * @returns name
//  */
// export const userIdSelector = createSelector(userSelector, (user) => {
//   return user.id
// })

// /**
//  * 企業IDを取得する
//  * @returns birth
//  */
// export const companyIdSelector = createSelector(userSelector, (user) => {
//   return user.companyId
// })
