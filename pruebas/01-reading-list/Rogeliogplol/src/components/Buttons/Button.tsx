import { twMerge } from 'tailwind-merge'

export function Button({
  disabled = false,
  onClick,
  children
}: {
  disabled?: boolean
  onClick?: React.MouseEventHandler
  children: React.ReactNode
}) {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center mt-auto gap-2 px-3 py-1.5 text-base text-white duration-150 bg-primary rounded-md hover:bg-primary-500 active:bg-primary-700',
        disabled &&
          'opacity-50 cursor-not-allowed hover:bg-primary active:bg-primary'
      )}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
