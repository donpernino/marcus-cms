import { BannerHeader } from './components/BannerHeader';

export interface EventListPage {
  id: number;
  attributes: {
    Banner?: BannerHeader;
  }
}
