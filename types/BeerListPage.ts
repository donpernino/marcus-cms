import { BannerHeader } from './components/BannerHeader';

export interface BeerListPage {
  id: number;
  attributes: {
    Banner?: BannerHeader;
  }
}
