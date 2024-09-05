import { Event } from "@/app/domainevent/entities/Event";

export interface IEvent {
    dataSource: Event[];
  }
  
export interface EventCardProps {
    event: Event;
    isReversed: boolean;
  }