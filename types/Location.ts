import { BannerHeader } from './components/BannerHeader';

export interface Location {
  id: number;
  attributes: {
    Banner?: BannerHeader;
  }
}
