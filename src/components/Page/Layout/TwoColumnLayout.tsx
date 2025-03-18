import { JSX } from "react"

import { Page } from ".."
import { ColumnUI } from '../Content/Content.css'
import { ImageUI } from '../../../styles/common.css'
import { PageType } from "../../../types/layout"
import { PageDisplayInfo } from "../../../common/constants"
import { SideBar } from "./Sidebar"

export type TwoColumnProps = {
  header?: string | JSX.Element
  sidebar?: React.ReactNode
  children: React.ReactNode
  pageType: PageType
}

export const TwoColumnLayoutWithImage = ({
  header: headerProp,
  sidebar,
  pageType,
  children,
}: TwoColumnProps) => {

  const {
    header: headerInfo,
    imageUrl,
    imageDescription
  } = PageDisplayInfo[pageType]

  const role = imageDescription ? 'figure' : 'presentation'
  const header = headerProp || headerInfo
  const classes = sidebar ? 'two-column has-sidebar' : 'two-column'

  return (
    <Page>
      <>
        {sidebar && (
          <SideBar>
            {sidebar}
          </SideBar>
        )}
      </>
      <Page.Header id="main-header" className={sidebar ? 'has-sidebar' : ''}>{header}</Page.Header>
      <Page.Content className={classes}>
        <ColumnUI>
          {children}
        </ColumnUI>
        {imageUrl && (
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