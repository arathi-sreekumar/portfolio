import { ExperienceDisplayInfo } from "../../common/constants"
import { Header } from "../../components/Page/Header"
import { LinkButton } from "../../components/Form/LinkButton"

export const ExperienceList = () => {
  return (
    <ul>
      {
        Object.values(ExperienceDisplayInfo).map(exp => {
          return exp ? (
            <li key={exp.id}>
              <Header level={2} id={exp.id}>
                {exp.title} <i>({exp.duration})</i>
              </Header>
              {exp.description}
              <LinkButton styleType="link" to={`#${exp.id}`}>Read more</LinkButton>
            </li>
          ) : null
        })
      }
    </ul>
  )
}
