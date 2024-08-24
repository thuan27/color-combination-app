export interface Color {
  hex: string
  name: string
  slug: string
}

export interface FeaturedImage {
  url?: string
  alt?: string
}

export interface ColorGroup {
  id: number
  name: string
  slug: string
  colors: Color[]
  featuredImage: FeaturedImage
  liked: boolean
  likes: number
  color: Color
}

export interface RelatedCombinations {
  id: number
  name: string
  slug: string
  colors: string[]
  likes: number
  liked: boolean
}
