import type { InfoBook } from '../services/books'

interface BookProps {
  book: InfoBook
  onClick?: ({ book }: { book: InfoBook }) => void
}

export function Book({ book, onClick }: BookProps) {
  if (onClick !== undefined) {
    return (
      <img
        src={book.cover}
        alt={book.title}
        onClick={onClick.bind(null, { book })}
        className="w-full h-auto"
      />
    )
  }

  return <img src={book.cover} alt={book.title} className="w-full h-auto" />
}
