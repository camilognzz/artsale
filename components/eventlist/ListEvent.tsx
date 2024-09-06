"use client"
import { Event } from "@/app/domain/entities/Event";
import { IEventProps } from "../dtos"; 
import React, { useEffect, useState } from "react";
import ItemEvent from "./ItemEvent";
import { EventCardProps, IEvent } from "./dtos";

const ListEvent: React.FC<IEvent> = (props) => {
    const [dataSource, setDataSource] = useState<Event[]>([]);

    const defaultRenderItems = (event:Event, index:number):JSX.Element => {
        return <ItemEvent key={index} event={event} isReversed={index % 2 !== 0} />
    };

    useEffect(() => {
        setDataSource(props.dataSource);
    }, [props.dataSource])

    return (
        <div className="max-w-3xl mx-auto px-4 py-6">{dataSource.map(defaultRenderItems)}</div>
    )
}

export default ListEvent;