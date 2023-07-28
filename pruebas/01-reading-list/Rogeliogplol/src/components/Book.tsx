import type { InfoBook } from '../services/books'

interface BookProps {
  book: InfoBook
  onClick?: React.MouseEventHandler<HTMLImageElement>
}

export function Book({ book, onClick }: BookProps) {
  const className = 'w-full h-auto'
  const ImgExtraProps: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > = {
    src: book.cover,
    alt: book.title,
    className
  }

  if (onClick !== undefined) {
    ImgExtraProps.onClick = onClick
  }

  return <img {...ImgExtraProps} />
}
