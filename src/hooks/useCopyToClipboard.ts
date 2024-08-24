import { useState } from 'react'

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000) // reset lại trạng thái sau 2 giây
    } catch (error) {
      console.error('Failed to copy text to clipboard:', error)
      setIsCopied(false)
    }
  }

  return [isCopied, copyToClipboard] as const
}

export default useCopyToClipboard
