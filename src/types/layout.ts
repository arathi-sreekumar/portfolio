export type LayoutType = 0 | 1 | 2

export type PageDisplayInfoModal = {
  layoutType: LayoutType;
  header: string;
  imageUrl?: string;
  mobileImageUrl?: string;
  imageDescription?: string;
}

export type PageType = 'Home' | 'Project' | 'Experience'

export type PageDisplayInfoListModal = {
  [key in PageType]: PageDisplayInfoModal
}


export type JobType = 'HelpScout' | 'Tray' | 'Futrli' | 'Brandwatch' | 'CanadaLife' | 'Semantico' | 'Amadeus' | 'Ness'

export type ExperienceDisplayInfoModal = {
  id: JobType;
  title: string;
  duration: string;
  description: string;
}

export type ExperienceDisplayInfoListModal = {
  [key in JobType]: ExperienceDisplayInfoModal
}
