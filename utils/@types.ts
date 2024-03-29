
export interface PackageProps {
  id: string | number;
  title: string;
  icon: string;
  pricePerSeat: number;
  features: {
    id: string;
    text: string;
    included: boolean;
    highlighted?: boolean
  }[],
  suggestedCourse?: {
    thumbnail: string;
    title: string
  },
  link?: string
}

export type NavbarItem = {
  title: string;
  to?: string;
  children?: NavbarItem[];
}

/* 
  Home data type
*/

export interface HomeData {
  hero: Hero
  _id: string
  _updatedAt: string
  lessonsAndCourses: LessonsAndCourses
  _createdAt: string
  _rev: string
  _type: string
}

export interface Hero {
  paragraph: string
  h1: H1[]
  callToAction: string
}

export interface H1 {
  children: Children[]
  _type: string
  style: string
  _key: string
  markDefs: any[]
}

export interface Children {
  _type: string
  marks: string[]
  text: string
  _key: string
}

export interface LessonsAndCourses {
  hours: number
  videos: number
  courses: number
}

/* 
  Plans data type
*/

export interface Plan {
  _rev: string
  _type: string
  bulletPoints: BulletPoint[]
  suggestedCourse?: string;
  _id: string
  title: string
  _updatedAt: string
  price: number
  _createdAt: string
}

export interface BulletPoint {
  _key: string
  included?: boolean
  text: string
  highlighted?: boolean
}

