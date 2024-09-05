import { Paint } from "../../app/domain/entities/Paint";

export interface ICardListProps {
    dataSource: Paint[]
}

export interface ItemCardProps {
    paint: Paint
}