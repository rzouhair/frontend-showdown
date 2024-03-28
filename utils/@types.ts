
export interface PackageProps {
  id: string | number;
  title: string;
  icon: string;
  pricePerSeat: number;
  features: {
    id: number;
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

