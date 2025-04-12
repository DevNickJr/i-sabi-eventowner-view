"use client"
import { useState } from 'react'
import { toast } from 'react-toastify'


function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState<string | null>(null)


  const copy = async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      // console.log('Copying to clipboard', text)
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      toast("Copied to clipboard")
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setCopiedText(null)
      toast("Copy failed")
      return false
    }
  }

  return { copiedText, copy }
}

export default useCopyToClipboard;
