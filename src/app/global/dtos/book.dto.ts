export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  coverUrl?: string;
  startDate?: Date;
  endDate?: Date;
  rating?: number;
  review?: string;
}
