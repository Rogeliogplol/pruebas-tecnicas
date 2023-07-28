import { useReadingBooks } from '../hooks/useReadingBooks.js'
import { getBooks } from '../services/books'

import { Book } from './Book.js'

export function Books() {
  const books = getBooks()

  const { readingBooks, addBookToReadingBooks, removeBookToReadingBooks } =
    useReadingBooks()

  return (
    <section className="py-4 xl:py-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 xl:grid-cols-[3fr,2fr]">
      <div>
        <h2 className="text-4xl font-bold mb-3 xl:mb-6">
          {books.length
            ? `${books.length} libros disponibles`
            : `No hay libros disponibles`}
        </h2>

        {readingBooks.length > 0 && (
          <h3 className="text-xl font-semibold">
            {`${readingBooks.length} en la lista de lectura`}
          </h3>
        )}

        <ul className="grid place-items-start grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8">
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
          <ul className="grid place-items-start grid-cols-2 gap-4 xl:grid-cols-3">
            {readingBooks.map((book) => (
              <li key={`reading-book-${book.ISBN}`}>
                <Book
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
