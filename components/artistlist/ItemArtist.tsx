import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { URL_DEFAULT_IMAGE } from "./contasts";
import { ArtistCardProps } from "./dtos";

const ItemArtist = ({ artist }: ArtistCardProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setMounted(true);
      clearTimeout(timeout);
    }, 0);

    return () => {
      setMounted(false);
    };
  }, [artist.id]);

  return (
    <div className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl mt-3 mb-3 dark:bg-gray-900">
      <div className="block w-full h-[60vh] md:h-[80vh] object-cover transition-all duration-500 ease-in-out">
        <Image
          alt=""
          className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
          height={400}
          src={artist.thumbnail || URL_DEFAULT_IMAGE}
          width={400}
        />
      </div>
      <div className="bg-rose-100 dark:bg-gray-900 block w-full h-full md:h-[80vh] py-6 md:py-14 md:px-20 px-8 text-left relative">
        {mounted && (
          <motion.div
            animate={{ opacity: 1 }}
            className="w-full"
            initial={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 0 }}
          >
            <div className="py-4 text-3xl md:text-5xl font-extrabold leading-tight text-gray-800 dark:text-gray-100">
              {artist.name}
            </div>
            <div
              className="description leading-relaxed font-medium text-base md:text-lg tracking-wide mt-4 italic text-gray-600 dark:text-gray-400
            "
            >
              {artist.description}
            </div>
          </motion.div>
        )}
        {mounted && (
          <button className="bg-rose-600 dark:bg-blue-700 text-white dark:text-gray-200 uppercase px-4 py-2 rounded-md mt-6 hover:bg-rose-400 dark:hover:bg-blue-600">
            Ver más
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemArtist;
