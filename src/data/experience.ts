export interface Experience {
  startDate: string;
  endDate: string | null;
  roleKey: string;
  companyKey: string;
  locationKey: string;
  descriptionKey: string;
}

export const experience: Experience[] = [
  {
    startDate: 'mar/2022',
    endDate: null,
    roleKey: 'experience.items.wg.role',
    companyKey: 'experience.items.wg.company',
    locationKey: 'experience.items.wg.location',
    descriptionKey: 'experience.items.wg.description'
  },
  {
    startDate: 'mar/2021',
    endDate: 'mar/2022',
    roleKey: 'experience.items.mv.role',
    companyKey: 'experience.items.mv.company',
    locationKey: 'experience.items.mv.location',
    descriptionKey: 'experience.items.mv.description'
  },
  {
    startDate: 'mai/2018',
    endDate: 'mar/2021',
    roleKey: 'experience.items.tdr.role',
    companyKey: 'experience.items.tdr.company',
    locationKey: 'experience.items.tdr.location',
    descriptionKey: 'experience.items.tdr.description'
  },
  {
    startDate: 'set/2017',
    endDate: 'mar/2018',
    roleKey: 'experience.items.macal.role',
    companyKey: 'experience.items.macal.company',
    locationKey: 'experience.items.macal.location',
    descriptionKey: 'experience.items.macal.description'
  }
];
