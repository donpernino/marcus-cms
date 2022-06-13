import { Beer } from '../Beer';

export interface FeaturedBeers {
  id: number;
  Title?: string;
  Description?: string;
  beers: { data: Beer[] };
}
