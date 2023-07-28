import { useReadingBooks } from '../hooks/useReadingBooks.js'
import { getBooks } from '../services/books'

import { Book } from './Book.js'

export function Books() {
  const books = getBooks()

  const { readingBooks, addBookToReadingBooks, removeBookToReadingBooks } =
    useReadingBooks()

  return (
    <section className="py-4 xl:py-8">
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

      <div className="grid place-items-start grid-cols-1 md:grid-cols-[3fr,2fr] gap-8 md:gap-12">
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] gap-4">
          {books.map((book) => (
            <li key={book.ISBN}>
              <Book book={book} onClick={addBookToReadingBooks} />
            </li>
          ))}
        </ul>

        <ul className="grid place-items-start grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] gap-4">
          {readingBooks.map((book) => (
            <li key={`reading-book-${book.ISBN}`}>
              <Book book={book} onClick={removeBookToReadingBooks} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
