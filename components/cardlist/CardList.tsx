"use client";
import React, { useEffect, useState } from "react";
import { Paint } from "../../app/domain/entities/Paint";
import { ICardListProps } from "./dtos";
import ItemCard from "./ItemCard";

const CardList: React.FC<ICardListProps> = (props) => {
  const [dataSource, setDataSource] = useState<Paint[]>([]);

  useEffect(() => {
    setDataSource(props.dataSource);
  }, [props.dataSource]);

  return (
    <div className="w-full max-w-5xl mx-auto grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3">
      {dataSource.map((paint, index) => (
        <ItemCard key={index} paint={paint} />
      ))}
    </div>
  );
};

export default CardList;
