import { useCallback } from 'react'
import { useReadingBooks } from '../hooks/useReadingBooks'
import { useBooks } from '../hooks/useBooks'

import Book from './Book'
import Select from './Select'

export function Books() {
  const { books, genres, pageFilter, genreFilter, updateFilters } = useBooks()
  const { readingBooks, addBookToReadingBooks, removeBookToReadingBooks } =
    useReadingBooks()

  const handleChangeSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      updateFilters({
        pages: pageFilter,
        genre: event.target.value
      })
    },
    []
  )

  return (
    <section className="py-4 xl:py-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 xl:grid-cols-[3fr,2fr]">
      <div>
        <h2 className="text-4xl font-bold">
          {books.length
            ? `${books.length} libros disponibles`
            : `No hay libros disponibles`}
        </h2>

        {readingBooks.length > 0 && (
          <h3 className="text-xl font-semibold mt-3 xl:mt-6">
            {`${readingBooks.length} en la lista de lectura`}
          </h3>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 xl:mt-4">
          <div></div>
          <div>
            <Select
              options={genres}
              value={genreFilter}
              labelText="Filtrar por género"
              id="filter-genre"
              onChange={handleChangeSelect}
            />
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8  mt-3 xl:mt-6">
          {books.map((book) => (
            <li key={book.ISBN}>
              <Book
                book={book}
                onClick={() => {
                  addBookToReadingBooks({ book })
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      {readingBooks.length > 0 && (
        <div className="bg-gray-800 text-white p-4 lg:p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-3 xl:mb-6">Lista de lectura</h2>
          <ul className="grid grid-cols-2 gap-4 xl:grid-cols-3">
            {readingBooks.map((book) => (
              <li key={`reading-book-${book.ISBN}`}>
                <Book
                  generalList={false}
                  book={book}
                  onClick={() => {
                    removeBookToReadingBooks({ book })
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
