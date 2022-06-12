import { BannerHeader } from './components/BannerHeader';

export interface Bar {
  id: number;
  attributes: {
    Banner: BannerHeader[];
  }
}
