import { ImageWithOrderedList } from './components/ImageWithOrderedList';
import { FeaturedBeers } from './components/FeaturedBeers';
import { BannerHeader } from './components/BannerHeader';

export interface Cave {
  id: number;
  attributes: {
    Banner?: BannerHeader;
    FeaturedBeers: FeaturedBeers[];
    ImageList: ImageWithOrderedList[];
  }
}
