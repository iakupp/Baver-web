
import { ButtonProps } from "@/app/types/button";

const Button = (props: ButtonProps) => {
  return (
        <button className="
                bg-white text-[var(--color-primary)]
                hover:bg-[var(--color-primary)] hover:text-white
                transition duration-300
                font-semibold px-6 py-3 rounded-lg
                shadow-md hover:shadow-xl cursor-pointer">
                {props.label}
            </button>
  )
}

export default Button