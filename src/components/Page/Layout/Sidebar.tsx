import { ReactNode, useState } from "react"
import { SideBarUI, SideBarToggleUI } from "./Layout.css"

type Prop = {
  children: ReactNode
}

export const SideBar = ({ children }: Prop) => {
  const [toggleClass, setToggleClass] = useState('closed')
  const handleToggle = () => {
    setToggleClass(toggleClass === 'closed' ? 'open' : 'closed')
  }

  return (
    <SideBarUI className={toggleClass}>
      <SideBarToggleUI
        onClick={handleToggle}
        className={toggleClass}
      >
        <i className="icon">{toggleClass === 'closed' ? '>' : '<'}</i>
      </SideBarToggleUI>
      {children}
    </SideBarUI>
  )
}