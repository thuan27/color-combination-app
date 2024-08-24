import { ColorGroup } from '@/types/color-combination.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ColorCombinationState {
  combinations: ColorGroup[]
}

const initialState: ColorCombinationState = {
  combinations: []
}

const colorCombinationSlice = createSlice({
  name: 'colorCombination',
  initialState,
  reducers: {
    setCombinations: (state, action: PayloadAction<ColorGroup[]>) => {
      state.combinations = action.payload
    },
    toggleLike: (state, action: PayloadAction<number>) => {
      const combination = state.combinations.find(
        (item) => item.id === action.payload
      )
      if (combination) {
        combination.liked = !combination.liked
        combination.likes += combination.liked ? 1 : -1
      }
    }
  }
})

export const { setCombinations, toggleLike } = colorCombinationSlice.actions

export default colorCombinationSlice.reducer
