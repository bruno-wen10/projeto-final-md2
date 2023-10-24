import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  RefObject
} from 'react'
import { SButton } from './butonStyled'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode
}
interface PropsRef
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  id: string
  hasError?: boolean
  icon?: ReactElement
  onIcon?: () => void
  ref?:
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | null
    | undefined
}

export default function Button({ children, ...props }: PropsRef) {
  return <SButton {...props}>{children}</SButton>
}
