import { Event } from "@/app/domain/entities/Event";

export interface IEvent {
    dataSource: Event[];
  }
  
export interface EventCardProps {
    event: Event;
    isReversed: boolean;
  }