import { Event } from '../Event';

export interface NextEvent {
  id: number;
  event?: { data: Event };
}
