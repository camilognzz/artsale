import Image from "next/image";
import { artistes, URL_DEFAULT_IMAGE } from "./contasts";
import { ArtistCardProps } from "./dtos";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ItemArtist = ({ artist }: ArtistCardProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setMounted(true);
      clearTimeout(timeout);
    }, 1000) 
    return () => {
      setMounted(false);
    };
  }, [artist.id]);
  return (
    <div className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
      <div className="block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out">
        <Image
          src={artist.thumbnail || URL_DEFAULT_IMAGE}
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
        />
      </div>
      <div className="block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left relative">
        {mounted && <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
          className="w-full"
        >
          <div className="py-16 text-5xl font-extrabold">{artist.name}</div>
          <div className="description leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
            {artist.description}
          </div>
        </motion.div>}
        
        {mounted && <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10">
          Ver más
        </button>}
        <style jsx>
          {`
            .description {
              max-height: 400px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 6;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default ItemArtist;
