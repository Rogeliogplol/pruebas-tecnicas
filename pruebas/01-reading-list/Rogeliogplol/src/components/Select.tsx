type OptionsType = {
  value: string
  label: string
}

export interface SelectProps {
  options: OptionsType[]
  onChange?: React.ChangeEventHandler
  value: string
  id: string
  labelText?: string
}

export function Select({
  id,
  options,
  value,
  onChange,
  labelText
}: SelectProps) {
  return (
    <>
      {labelText && (
        <label
          htmlFor={id}
          className="block mb-2 text-xl font-medium text-white">
          {labelText}
        </label>
      )}

      <select
        id={id}
        className="border mb-6 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        onChange={onChange}
        defaultValue={value}>
        {options.map((option) => (
          <option key={`option-${id}-${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}

export default Select
