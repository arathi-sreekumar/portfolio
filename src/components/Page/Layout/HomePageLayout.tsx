import { JSX } from "react"

import { Page } from ".."
import { ColumnUI } from '../Content/Content.css'
import { ImageUI } from '../../../styles/common.css'
import { PageType } from "../../../types/layout"
import { PageDisplayInfo } from "../../../common/constants"

export type HomePageProps = {
  header?: string | JSX.Element
  children: React.ReactNode
  pageType: PageType
}

export const HomePageLayout = ({
  header: headerProp,
  pageType,
  children,
}: HomePageProps) => {

  const {
    header: headerInfo,
    imageUrl,
    mobileImageUrl,
    imageDescription
  } = PageDisplayInfo[pageType]

  const role = imageDescription ? 'figure' : 'presentation'
  const header = headerProp || headerInfo

  return (
    <Page>
      <Page.Content className="two-column home">
        <ColumnUI className="home">
          <Page.Header id="main-header">{header}</Page.Header>
          {window.innerWidth <= 900 && (mobileImageUrl || imageUrl) && (
            <ImageUI
              src={mobileImageUrl || imageUrl}
              alt={imageDescription}
            />
          )}
          {children}
        </ColumnUI>
        {window.innerWidth > 900 && imageUrl && (
          <ColumnUI role={role}>
            <ImageUI
              src={imageUrl}
              alt={imageDescription}
            />
          </ColumnUI>
        )}
      </Page.Content>
    </Page>
  )
}