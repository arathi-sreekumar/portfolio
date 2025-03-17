import { JobType } from '../../types/layout';
import {
  Brandwatch,
  CanadaLife,
  Futrli,
  HelpScout,
  Tray,
} from './Company';

export type ExperienceProp = {
  expId: JobType;
}

const getExperienceComponent = (expId: JobType) => {
  switch (expId) {
    case 'CanadaLife':
      return <CanadaLife />
    case 'HelpScout':
      return <HelpScout />
    case 'Tray':
      return <Tray />
    case 'Futrli':
      return <Futrli />
    case 'Brandwatch':
      return <Brandwatch />
    default:
      return <p>TO DO</p>
  }
}

export const Experience = ({ expId }: ExperienceProp) => {
  return (
    <main>
      {getExperienceComponent(expId)}
    </main>
  )
}
