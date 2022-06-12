import { Media } from './Media';

export interface Layout {
  id: number;
  attributes: {
    Logo?: { data: Media };
  }
}
