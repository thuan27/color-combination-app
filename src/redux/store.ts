import { configureStore } from '@reduxjs/toolkit'
import colorCombinationReducer from '@/features/colorCombinationSlice'

export const store = configureStore({
  reducer: {
    colorCombination: colorCombinationReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
