"use client";

import { use, useEffect, useState } from "react";
import { artistes, URL_DEFAULT_IMAGE } from "./contasts";
import ItemArtist from "./ItemArtist";
import { Artist } from "@/app/domain/entities/Artist";
import { IListArtistProps } from "./dtos";

const ListArtist = (props: IListArtistProps) => {
  const [activeIndexArtist, setActiveIndexArtist] = useState(0);
  const [artist, setArtist] = useState<Artist>(artistes[0]);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  const clickNext = () => {
    activeIndexArtist === artistes.length - 1
      ? setActiveIndexArtist(0)
      : setActiveIndexArtist(activeIndexArtist + 1);
  };
  const clickPrev = () => {
    activeIndexArtist === 0
      ? setActiveIndexArtist(artistes.length - 1)
      : setActiveIndexArtist(activeIndexArtist - 1);
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => {
        clickNext();
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeIndexArtist, autoPlay]);

  useEffect(() => {
    setArtist(artistes[activeIndexArtist]);
  }, [activeIndexArtist]);

  useEffect(() => {
    if (typeof props.autoPlay != "undefined") setAutoPlay(props.autoPlay);
  }, [props.autoPlay]);

  return (
    <div className="relative">
      <ItemArtist artist={artist} />
      <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
        <div
          className="absolute bottom-2 right-10 cursor-pointer"
          onClick={clickPrev}
        >
          <img src="/left.svg" alt="" />
        </div>
        <div
          className="absolute bottom-2 right-2 cursor-pointer"
          onClick={clickNext}
        >
          <img src="/right.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ListArtist;
