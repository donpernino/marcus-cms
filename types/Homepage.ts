import { BannerHeader } from './components/BannerHeader';

export interface Homepage {
  id: number;
  attributes: {
    Banner: BannerHeader[];
    HomepageDynamicZone?: any;
  }
}
