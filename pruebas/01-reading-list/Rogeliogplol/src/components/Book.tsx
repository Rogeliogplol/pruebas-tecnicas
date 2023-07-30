import { twMerge } from 'tailwind-merge'

import type { InfoBook } from '../services/books'
import AddButton from './Buttons/AddButton'
import RemoveButton from './Buttons/RemoveButton'

interface BookProps {
  book: InfoBook
  onClick?: React.MouseEventHandler
  className?: string
  generalList?: boolean
}

export function Book({
  book,
  onClick,
  className,
  generalList = true
}: BookProps) {
  const ImgProps: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > = {
    src: book.cover,
    alt: book.title
  }

  return (
    <div className="relative h-full p-3 flex flex-col gap-3 bg-gray-700 rounded-lg">
      <img
        {...ImgProps}
        className={twMerge('w-full h-auto rounded-lg', className)}
      />

      {generalList && <AddButton disabled={book.reading} onClick={onClick} />}
      {!generalList && <RemoveButton onClick={onClick} />}
    </div>
  )
}

export default Book
