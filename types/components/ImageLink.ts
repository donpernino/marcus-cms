import { Media } from '../Media';

export interface ImageLink {
  id: number;
  Image?: { data: Media };
  PageLink?: string;
  Text?: string;
  Title?: string;
}
