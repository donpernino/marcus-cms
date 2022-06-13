import { Media } from '../Media';

export interface ImageWithOrderedList {
  id: number;
  Image?: { data: Media[] };
  List?: string;
  Title?: string;
}
