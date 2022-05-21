// Modules
import { createSlice } from '@reduxjs/toolkit'
// Libs
// import { notification } from '../utils/commonFunctions'
// Types
import type { PayloadAction } from '@reduxjs/toolkit'

// Redux Type
export type languageType = boolean

// Initial State
const initialState: languageType = false

// /**
//  * Userの基本情報をReduxに格納する
//  */
// export const storeUser = createAsyncThunk(
//   'language/store',
//   async (_, { dispatch }) => {
//     try {
//       const apiToken = new CookieManager('apiToken').get
//       if (IsEmpty(apiToken)) return
//       const data = await GetCompanyUserDetailDocument(apiToken)
//       dispatch(userSlice.actions.updateUser({ ...initialState, ...data }))
//       // managerFlgをcookieに保存
//       const managerFlgObj = new CookieManager('managerFlg')
//       managerFlgObj.set = String(data.managerFlg)
//     } catch {
//       return { ...initialState }
//     }
//   }
// )

/**
 * Stateの値を変更するための各処理（Reducer）
 */
export const languageSlice = createSlice({
  name: 'language', // Slice名
  initialState, // 初期値
  // 各reducer 第一引数でstate情報を受け取り、第二引数でユーザーが操作した情報を受け取る
  reducers: {
    setLanguage(_: languageType, action: PayloadAction<boolean>) {
      return action.payload
    },
    resetLanguage(): languageType {
      return initialState
    }
  }
  // 非同期処理中のReducer
  // extraReducers: (builder) =>
  //   builder.addCase(storeUser.rejected, () => {
  //     notification('error', 'ログインに失敗しました。')
  //   })
})
