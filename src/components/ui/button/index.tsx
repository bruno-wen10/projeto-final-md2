import { ReactNode } from "react"
import { SButton } from "./butonStyled"

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children: ReactNode
}

export default function Button ({ children, ...props }: Props) {
  return <SButton {...props}>{children}</SButton>
}
