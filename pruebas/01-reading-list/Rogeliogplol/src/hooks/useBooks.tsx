import { useCallback, useEffect, useState } from 'react'

import { FiltersType, InfoBook, getBooks, getGenres } from '../services/books'

export function useBooks() {
  const [books, setBooks] = useState<InfoBook[]>([])
  const [pageFilter, setPageFilter] = useState<number>(0)
  const [genreFilter, setGenreFilter] = useState<string>('all')

  const genres = [
    {
      value: 'all',
      label: 'Todas'
    },
    ...getGenres().map((genre) => ({ value: genre, label: genre }))
  ]

  const updateFilters = useCallback((filter: FiltersType) => {
    if (filter.pages !== undefined) {
      setPageFilter(filter.pages)
    }

    if (filter.genre !== undefined) {
      setGenreFilter(filter.genre)
    }
  }, [])

  useEffect(() => {
    const filter: FiltersType = {}

    if (pageFilter > 0) {
      filter['pages'] = pageFilter
    }

    if (genreFilter !== 'all') {
      filter['genre'] = genreFilter
    }

    setBooks(getBooks(filter))
  }, [pageFilter, genreFilter])

  return {
    books,
    genres,
    pageFilter,
    genreFilter,
    updateFilters
  }
}
