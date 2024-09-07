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
    }, 1000);
    return () => {
      setMounted(false);
    };
  }, [artist.id]);

  return (
    <div className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl mt-3 mb-3">
      <div className="block w-full h-[60vh] md:h-[80vh] object-cover transition-all duration-500 ease-in-out">
        <Image
          src={artist.thumbnail || URL_DEFAULT_IMAGE}
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
        />
      </div>
      <div className="bg-rose-100 block w-full h-full md:h-[80vh] py-10 md:py-20 md:px-20 px-8 text-left relative">
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 0 }}
            className="w-full"
          >
            <div className="py-6 text-3xl md:text-5xl font-extrabold">
              {artist.name}
            </div>
            <div className="description leading-relaxed font-medium text-base md:text-lg tracking-wide h-60 md:h-40 italic text-gray-600">
              {artist.description}
            </div>
          </motion.div>
        )}
        {mounted && (
          <button className="bg-rose-600 text-white uppercase px-4 py-2 rounded-md mt-6 md:my-10 hover:bg-rose-400">
            Ver más
          </button>
        )}
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
