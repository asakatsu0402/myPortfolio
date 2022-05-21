// Modules
import { useSelector as rawSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// Reducers
import { languageSlice } from './stores/language'
// Types
import type { TypedUseSelectorHook } from 'react-redux'

// ここにスライスを追加していきます
const reducer = combineReducers({
  language: languageSlice.reducer
})

// *************** Export *************** //
export type RootState = ReturnType<typeof reducer>

// Storeを作成
// export const setupStore = (): Store => {
//   const middlewares = [...getDefaultMiddleware()]
//   const store = configureStore({
//     reducer: rootReducer,
//     middleware: middlewares
//   })

//   return store
// }

export const store = configureStore({ reducer })

// StoreでSliceの補完を可能にするSelector設定
export const customSelector: TypedUseSelectorHook<RootState> = rawSelector
