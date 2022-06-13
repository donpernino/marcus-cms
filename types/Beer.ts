import { Media } from './Media';

export interface Beer {
  id: number;
  attributes: {
    Image?: { data: Media[] };
    Name?: string;
    Description?: string;
    Type?: 'blanche' | 'blonde' | 'ambrée' | 'brune' | 'fruitée';
    Specificity?: string;
    Format?: string;
    Alcohol?: number;
    Country?: string;
    Tireuse?: boolean;
    Promoted?: boolean;
    Slug?: string;
  }
}
