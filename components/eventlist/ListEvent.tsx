"use client";
import React, { useEffect, useState } from "react";
import ItemEvent from "./ItemEvent";
import { IEvent } from "./dtos";
import { Event } from "@/app/domain/entities/Event";

const ListEvent: React.FC<IEvent> = (props) => {
  const [dataSource, setDataSource] = useState<Event[]>([]);

  useEffect(() => {
    setDataSource(props.dataSource);
  }, [props.dataSource]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {dataSource.map((event, index) => (
        <ItemEvent key={index} event={event} isReversed={index % 2 !== 0} />
      ))}
    </div>
  );
};

export default ListEvent;
