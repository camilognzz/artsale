import Image from 'next/image';

const Contacto = () => {
  return (
    <div className="bg-[#d1a27f] w-full py-10 flex justify-between items-center px-6">
      {/* Contenedor para el texto */}
      <div className="w-1/3 text-white text-xl font-semibold">
        <div className="overflow-hidden h-24"> {/* Limita la altura del texto a 3 líneas */}
          <p className="line-clamp-3">
            Suscríbete a nuestro boletín para recibir las últimas actualizaciones
          </p>
        </div>
      </div>

      {/* Input y botón */}
      <div className="w-1/3 flex items-center">
        <input
          type="email"
          placeholder="your email"
          className="p-2 rounded-l-lg w-full outline-none bg-[#d1a27f] text-white placeholder-white border border-black border-opacity-30 focus:border-opacity-100 transition" 
        />
        <button className="bg-transparent text-white border border-white p-2 rounded-r-lg hover:bg-white hover:text-black transition">
          Suscríbete now
        </button>
      </div>

      {/* Imagen */}
      <div className="w-1/3 flex justify-end">
        <Image
          src="/images/page-principal.png" 
          alt="Boletín"
          width={150}
          height={150}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Contacto;
