import { Socials } from './components/Socials';
import { Contact } from './components/Contact';
import { Media } from './Media';

export interface Layout {
  id: number;
  attributes: {
    Logo?: { data: Media };
    Contact: Contact[];
    Socials: Socials[];
  }
}
