import combinationsData from '@/assets/_jsons/combinations/combinations.json'
import { ColorGroup } from '@/types/color-combination.interface'

// Fake service to get combinations data
export const getCombinations = async (): Promise<ColorGroup[]> => {
  // Simulate an API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(combinationsData.combinations as any)
    }, 500) // 500ms delay for the fake API call
  })
}
