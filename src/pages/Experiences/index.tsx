import { useLocation } from "react-router-dom";

import { Layout } from "../../components/Page/Layout"
import { PAGE_TYPE, ExperienceDisplayInfo } from "../../common/constants"

import { JobType } from "../../types/layout"
import { ExperienceList } from "./Listing"
import { Experience } from "./Experience";
import { ExperienceSidebar } from "./ExperienceSidebar";

export const Experiences = () => {
  const location = useLocation()
  const selectedExp = location.hash.substring(1) as JobType
  const experienceInfo = ExperienceDisplayInfo[selectedExp]

  return (
    <Layout
      pageType={PAGE_TYPE.EXPERIENCE}
      header={
        selectedExp ? (
          <>{experienceInfo.title} <i>({experienceInfo.duration})</i></>
        ) : undefined
      }
      sidebar={
        selectedExp ? (
          <ExperienceSidebar expId={selectedExp} />
        ) : undefined
      }
    >
      {selectedExp ? <Experience expId={selectedExp} /> : <ExperienceList />}
    </Layout>
  )
}
