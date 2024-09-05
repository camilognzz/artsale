"use client"
import { Paint } from '../../app/domain/entities/Paint'
import React, { useEffect, useState } from 'react'
import { ICardListProps } from './dtos'
import ItemCard from './ItemCard'

const CardList:React.FC<ICardListProps> = (props) => {
    const [dataSource, setDataSource] = useState<Paint[]>([])

    const defaultRenderItems = (paint:Paint, index:number):JSX.Element => {
        return <ItemCard key={index} paint={paint}/>
    };

    useEffect(() => {
        setDataSource(props.dataSource);
    }, [props.dataSource])

  return (
    <div className='w-full grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3'>{dataSource.map(defaultRenderItems)}</div>
  )
}

export default CardList

