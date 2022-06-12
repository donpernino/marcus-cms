import { Media } from './Media';

export interface Event {
  id: number;
  attributes: {
    Image?: { data: Media[] };
    Title?: string;
    Date?: Date;
    Description?: string;
    Type?: string;
  }
}
