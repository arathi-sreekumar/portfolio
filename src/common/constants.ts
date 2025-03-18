//The reason for moving text to this file is for internationalisation

import { ExperienceDisplayInfoListModal, PageDisplayInfoListModal } from "../types/layout"

export const LAYOUT = {
  HOME: 0,
  SINGLE_COLUMN: 1,
  TWO_COLUMN: 2,
} as const

export const PAGE_TYPE = {
  HOME: 'Home',
  PROJECT: 'Project',
  EXPERIENCE: 'Experience',
} as const

export const PageDisplayInfo: PageDisplayInfoListModal = {
  Home: {
    layoutType: LAYOUT.HOME,
    header: 'Hello, I am Arathi',
    imageUrl: '/portfolio/arathi_profile.jpg',
    imageDescription: 'A sketch of Arathi'
  },
  Project: {
    layoutType: LAYOUT.TWO_COLUMN,
    header: 'My Projects'
  },
  Experience: {
    layoutType: LAYOUT.SINGLE_COLUMN,
    header: 'Professional Experience'
  },
}

export const JOB_LIST = {
  HELPSCOUT: 'HelpScout',
  TRAY: 'Tray',
  FUTRLI: 'Futrli',
  BRANDWATCH: 'Brandwatch',
  CANADALIFE: 'CanadaLife',
  SEMANTICO: 'Semantico',
  AMADEUS: 'Amadeus',
  NESS: 'Ness',
} as const

export const ExperienceDisplayInfo: ExperienceDisplayInfoListModal = {
  HelpScout: {
    id: JOB_LIST.HELPSCOUT,
    title: 'Help Scout',
    duration: 'July 2022 - Feb 2025',
    description: 'HelpScout is a customer support software company whose products including Shared Inbox, Live chat software (Beacon), and documentation platform.',
  },
  Tray: {
    id: JOB_LIST.TRAY,
    title: 'Tray.io',
    duration: 'July 2021 - July 2022',
    description: 'Tray.io provided an API integration platform, they have since pivoted to AI Agents and other AI products and rebranded to Tray.ai'
  },
  Futrli: {
    id: JOB_LIST.FUTRLI,
    title: 'Futrli',
    duration: 'Oct 2018 - July 2021',
    description: 'Futrli provides financial forecasting and reporting software for SMBs.'
  },
  Brandwatch: {
    id: JOB_LIST.BRANDWATCH,
    title: 'Brandwatch',
    duration: 'Sept 2016 - Oct 2018',
    description: 'Brandwatch provides social media monitoring and analytics tools.'
  },
  CanadaLife: {
    id: JOB_LIST.CANADALIFE,
    title: 'Retirement Advantage',
    duration: 'Nov 2015 - Sept 2016',
    description: 'Retirement advantage (since acquired by Canada Life) provided retirement products such as pension drawdowns and annuities.'
  },
  Semantico: {
    id: JOB_LIST.SEMANTICO,
    title: 'Semantico',
    duration: 'August 2013 till November 2015',
    description: 'Semantico is a web design and development company.'
  },
  Amadeus: {
    id: JOB_LIST.AMADEUS,
    title: 'Amadeus',
    duration: 'June 2012 - October 2012',
    description: 'Amadeus is a global technology company that provides software solutions for the travel and tourism industry.'
  },
  Ness: {
    id: JOB_LIST.NESS,
    title: 'Ness',
    duration: 'July 2009 - June 2012',
    description: 'Ness is a digital engineering company providing advisory & scaled services for digital business transformation, leveraging digital transformation technologies.'
  }
}
