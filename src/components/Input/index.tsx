type Props = {
  name: string
  label: string
  type: string
  onChange: any
  value: any
  className?: string
}


const Input: React.FC<Props> = ({ name, label, type, onChange, value, className }) => {
  return (
    type === 'textarea' ?
      <textarea
        id={name}
        name={name}
        placeholder={label}
        className={`w-full h-full rounded-3xl px-6 py-4 mb-4 bg-merli-purple text-base md:text-2xl text-merli-gray-light ${className}`}
        value={value}
        required
      />
      :
      <input
        id={name}
        type={type}
        name={name}
        placeholder={label}
        className={`w-full rounded-full px-6 py-4 mb-4 bg-merli-purple text-base md:text-2xl text-merli-gray-light ${className}`}
        value={value}
        required
      />
  )
}

export default Input