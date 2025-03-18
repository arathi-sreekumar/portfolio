import { Content } from "./Content"
import { Header } from "./Header"
import { SideBar } from "./Layout/Sidebar"
import { PageUI } from "./Page.css"


type PageProps = {
  children: React.ReactElement<typeof Header | typeof Content | typeof SideBar>[] | React.ReactElement<typeof Header | typeof Content>
}

type Props = React.HTMLAttributes<HTMLDivElement> & PageProps

export const Page = ({ children, ...rest }: Props) => {
  return (
    <PageUI {...rest}>
      {children}
    </PageUI>
  )
}

Page.Header = Header
Page.Content = Content