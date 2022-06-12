import { ImageLink } from './ImageLink';

export interface Featured {
  id: number;
  Title?: string;
  Description?: string;
  ImageLink: ImageLink[];
}
