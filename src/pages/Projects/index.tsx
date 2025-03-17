import { Layout } from "../../components/Page/Layout"
import { PAGE_TYPE } from "../../common/constants"
import { LinkButton } from "../../components/Form/LinkButton"

export const Projects = () => {
  return (
    <Layout
      pageType={PAGE_TYPE.PROJECT}
    >
      <p>
        Here are some of the personal projects I have worked on to demonstrate my coding skills:
      </p>

      <ul>
        <li>
          <LinkButton styleType="link" to="https://github.com/arathi-sreekumar/property-assistant-app">
            Property Assistant
          </LinkButton>
        </li>
        <li>
          <LinkButton styleType="link" to="https://github.com/arathi-sreekumar/forms-exercise">
            Form Exercise
          </LinkButton>
        </li>
        <li>
          <LinkButton styleType="link" to="https://github.com/arathi-sreekumar/wordCloud">
            Word Cloud
          </LinkButton>
        </li>
        <li>
          <LinkButton styleType="link" to="https://github.com/arathi-sreekumar/canvas-puzzle">
            Canvas Puzzle
          </LinkButton>
        </li>
        <li>
          <LinkButton styleType="link" to="https://github.com/arathi-sreekumar/custom-select-menu">
            Custom Select
          </LinkButton>
        </li>
        <li>
          <LinkButton styleType="link" to="https://github.com/arathi-sreekumar/money-pool-challenge">
            Money pool challenge
          </LinkButton>
        </li>
        <li>
          <LinkButton styleType="link" to="https://github.com/arathi-sreekumar/d3Experiments">
            D3 experiments
          </LinkButton>
        </li>
        <li>
          <LinkButton styleType="link" to="https://github.com/arathi-sreekumar/crime-stats">
            Crime stats
          </LinkButton>
        </li>
        <li>
          <LinkButton styleType="link" to="https://github.com/arathi-sreekumar/portfolio-old">
            Old Portfolio website
          </LinkButton>
        </li>
      </ul>
    </Layout>
  )
}
