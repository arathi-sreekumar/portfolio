import { ReactNode } from "react"
import {
  Header1UI,
  Header2UI,
  Header3UI,
  Header4UI,
  Header5UI,
  Header6UI,
} from "./Header.css"

type Level = 1 | 2 | 3 | 4 | 5 | 6

type HeaderProps = {
  children: ReactNode
  id?: string
  level?: Level
}

type Props = React.HTMLAttributes<HTMLHeadingElement> & HeaderProps

const getHeaderComponent = (level: Level) => {
  switch (level) {
    case 6: return Header6UI
    case 5: return Header5UI
    case 4: return Header4UI
    case 3: return Header3UI
    case 2: return Header2UI
    default: return Header1UI
  }
}

export const Header = ({
  children,
  id,
  level = 1,
  ...rest
}: Props) => {
  const HeaderUI = getHeaderComponent(level)

  return (
    <HeaderUI id={id} {...rest}>
      {children}
    </HeaderUI>
  )
}