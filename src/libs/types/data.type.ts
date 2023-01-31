export type GalleryItem = {
  src: string;
  alt: string;
};
export type NavItem = {
  label: string;
  href: string;
};
export type MenuItem = {
  title: string;
  price: number;
  info: string;
};
export type MenuCategory = {
  name: string;
  description?: string;
  items: MenuItem[];
};
export type DayRange = {
  beg: string;
  end?: string;
};
export type HoursRange = {
  beg: string;
  end: string;
};
