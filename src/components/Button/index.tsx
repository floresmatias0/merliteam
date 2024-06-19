import { ButtonVariation } from "@/datamodels/models"
import Link from "next/link"

type Props = {
  label: string
  variant: ButtonVariation
  clickHandler?: any
  className?: string
  href?: string
  disabled?: boolean
}
const Button: React.FC<Props> = ({ label, variant, className = '', clickHandler, href = '' , disabled = false }) => {

  const buttonType = variant === ButtonVariation.filled ? 'bg-merli-purple-dark hover:bg-merli-purple' : 'border-2 border-merli-purple hover:border-2 hover:border-merli-purple-light hover:bg-[#270632CC]'

  return (
    <>
      {
        !href ?
          <button
            className={`rounded-xl px-4 py-2 transition-all text-merli-white ${buttonType} ${className}`}
            onClick={clickHandler}
            disabled={disabled}
          >
            {label}
          </button>
          :
          <Link
            href={href}
            className={`rounded-xl px-4 py-2 transition-all text-merli-white ${buttonType} ${className}`}
            shallow={true}
          >
            {label}
          </Link>
      }
    </>
  )
}

export default Button