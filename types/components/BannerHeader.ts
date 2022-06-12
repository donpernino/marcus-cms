import { Media } from '../Media';

export interface BannerHeader {
  id: number;
  Title: string;
  Description?: string;
  Image: { data: Media[] };
}
