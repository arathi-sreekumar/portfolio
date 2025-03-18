import { JobType } from '../../types/layout';
import {
  Amadeus,
  Brandwatch,
  CanadaLife,
  Futrli,
  HelpScout,
  Ness,
  Semantico,
  Tray,
} from './Company';

export type ExperienceProp = {
  expId: JobType;
}

const getExperienceComponent = (expId: JobType) => {
  switch (expId) {
    case 'Amadeus':
      return <Amadeus />
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
    case 'Semantico':
      return <Semantico />
    case 'Ness':
      return <Ness />
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
