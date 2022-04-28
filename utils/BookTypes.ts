export interface IBasicBook {
  id: number;
  isbn: string;
  title: string;
  price: number;
  currencyCode: string;
  author: string;
}

export interface IFullBook extends IBasicBook {
  description: string;
}
