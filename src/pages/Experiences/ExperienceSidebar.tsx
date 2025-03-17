import { ExperienceDisplayInfo } from "../../common/constants"
import { LinkButton } from "../../components/Form/LinkButton"
import { JobType } from "../../types/layout"
import { SideBarUI } from "./Experience.css"

type Prop = {
  expId: JobType
}

export const ExperienceSidebar = ({ expId }: Prop) => {
  return (
    <SideBarUI>
      {
        Object.values(ExperienceDisplayInfo).map(exp => {
          const isSelected = exp.id === expId

          return exp ? (
            isSelected ? (
              <li key={exp.id} className='selected'>
                {exp.title}
              </li>
            )
              : (
                <li key={exp.id}>
                  <LinkButton styleType="link" to={`#${exp.id}`}>{exp.title}</LinkButton>
                </li>
              )
          ) : null
        })
      }
    </SideBarUI >
  )
}
