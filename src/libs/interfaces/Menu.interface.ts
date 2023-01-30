export interface IMenuItem {
  title: string;
  price: number;
  info: string;
}

export interface IMenuCategory {
  name: string;
  description?: string;
  items: IMenuItem[];
}

export interface IMenu {
  categories: IMenuCategory[];
  description: string;
}
