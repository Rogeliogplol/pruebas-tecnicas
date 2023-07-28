import { useCallback, useEffect, useState } from 'react'

import {
  InfoBook,
  getReadingBooks,
  addReadingBook,
  removeReadingBook
} from '../services/books'

export function useReadingBooks() {
  const [readingBooks, setReadingBooks] = useState<InfoBook[]>([])

  const handleStorage = useCallback(() => {
    setReadingBooks(getReadingBooks)
  }, [])

  const addBookToReadingBooks = useCallback(({ book }: { book: InfoBook }) => {
    addReadingBook({ book })
    handleStorage()
  }, [])

  const removeBookToReadingBooks = useCallback(
    ({ book }: { book: InfoBook }) => {
      removeReadingBook({ book })
      handleStorage()
    },
    []
  )

  useEffect(handleStorage, [])

  useEffect(() => {
    window.addEventListener('storage', handleStorage)

    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  }, [])

  return {
    readingBooks,
    addBookToReadingBooks,
    removeBookToReadingBooks
  }
}
