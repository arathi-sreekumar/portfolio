import { LayoutUI } from "./Layout.css"
import { Nav } from "../../Nav"
import { LayoutType, PageType } from "../../../types/layout"
import { LAYOUT, PageDisplayInfo } from "../../../common/constants"
import { TwoColumnLayoutWithImage, TwoColumnProps } from "./TwoColumnLayout"
import { HomePageLayout } from "./HomePageLayout"

type OwnProps = {
  pageType: PageType
}

type Props = React.HTMLAttributes<HTMLDivElement> & OwnProps & TwoColumnProps

const getLayoutComponent = (layoutType: LayoutType) => {
  switch (layoutType) {
    case LAYOUT.HOME:
      return HomePageLayout
    case LAYOUT.TWO_COLUMN:
      return TwoColumnLayoutWithImage
    default:
      return TwoColumnLayoutWithImage
  }
}

export const Layout = ({
  header,
  sidebar,
  pageType = 'Home',
  children,
  ...rest
}: Props) => {
  const {
    layoutType,
  } = PageDisplayInfo[pageType]

  const LayoutComponent = getLayoutComponent(layoutType)

  return (
    <LayoutUI {...rest}>
      <Nav />
      <LayoutComponent
        header={header}
        pageType={pageType}
        sidebar={sidebar}
      >
        {children}
      </LayoutComponent>
    </LayoutUI>
  )
}