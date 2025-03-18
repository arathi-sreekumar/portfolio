import { Layout } from "../../components/Page/Layout"
import { PAGE_TYPE } from "../../common/constants"

export const Home = () => {
  return (
    <Layout
      pageType={PAGE_TYPE.HOME}
    >
      <p>
        I am someone who enjoys creative thinking and converting ideas into reality using programming as a tool. I am hoping that I would always be in a situation where I can enjoy what I do and improve myself.
      </p>
      <p>
        I have a Bachelors degree in Engineering (Computer Science) passed with distinction. I have a wealth of experience in frontend spanning multiple verticals and technology stacks.
      </p>
      <p>
        I am a frontend specialist who can adapt to any technology and who is a great team player. I always work with empathy and with the customers in mind, choosing the best solution for the given scenario.
      </p>
      <p>
        I enjoy getting stuck into a problem, looking into the architecture of a project and mentoring the next generation of programmers. I believe in constantly learning and have realised the more I learn that the more there is!
      </p>
    </Layout>
  )
}
