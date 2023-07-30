import books from '../mocks/books.json'

export type InfoBook = {
  title: string
  pages: Number
  genre: string
  cover: string
  synopsis: string
  year: Number
  ISBN: string
  author: {
    name: string
    otherBooks: string[]
  }
  reading: boolean
}

export type FiltersType = {
  pages?: number
  genre?: string
}

export function getBooks(filters: FiltersType): InfoBook[] {
  const readinBooks = getReadingBooks()

  let localBooks = books.library.map(({ book }) => {
    const readingBook = readinBooks.find(
      (readingBook) => readingBook.ISBN === book.ISBN
    )

    return {
      ...book,
      reading: readingBook !== undefined
    }
  })

  // apply filters
  if (filters.pages) {
    localBooks = localBooks.filter((book) => book.pages >= filters.pages)
  }

  if (filters.genre) {
    localBooks = localBooks.filter((book) => book.genre === filters.genre)
  }

  return localBooks
}

export function getReadingBooks(): InfoBook[] {
  const readingBooks = window.localStorage.getItem('readingBooks') ?? '[]'

  return JSON.parse(readingBooks)
}

export function addReadingBook({ book }: { book: InfoBook }) {
  const readingBooks = getReadingBooks()
  const readinBook = readingBooks.find(
    (readingBook) => readingBook.ISBN === book.ISBN
  )

  if (readinBook) return

  readingBooks.push(book)
  window.localStorage.setItem('readingBooks', JSON.stringify(readingBooks))
}

export function removeReadingBook({ book }: { book: InfoBook }) {
  const readingBooks = getReadingBooks()
  const index = readingBooks.map((book) => book.ISBN).indexOf(book.ISBN)

  if (index === -1) return

  readingBooks.splice(index, 1)
  window.localStorage.setItem('readingBooks', JSON.stringify(readingBooks))
}

export function getGenres(): string[] {
  const localBooks = books.library

  const genres = localBooks.map(({ book }) => book.genre)

  return [...new Set(genres)]
}
