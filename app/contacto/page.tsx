import Image from 'next/image';

const Contacto = () => {
  return (
    <div className="bg-[#d1a27f] w-full py-6 flex flex-col md:flex-row justify-between items-center px-4">
      {/* Contenedor para el texto */}
      <div className="w-full md:w-1/3 text-black flex justify-center mb-4 md:mb-0">
        <div className="overflow-hidden h-24 text-center">
          <p
            style={{
              fontSize: '1.25rem', // Tamaño reducido del texto para pantallas pequeñas
              lineHeight: '1.4', // Ajusta la altura de línea para que el texto se vea bien
            }}
            className="line-clamp-3"
          >
            Suscríbete a nuestro{" "}
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px black', // Borde negro alrededor de las letras
                fontWeight: 'bold',
                fontSize: '1.25rem', // Tamaño igual para el texto con borde
                letterSpacing: '-0.02em', // Ajuste menor del espaciado entre letras
              }}
            >
              boletín para recibir
            </span>{" "}
            las últimas actualizaciones
          </p>
        </div>
      </div>

      {/* Input y botón */}
      <div className="w-full md:w-1/3 flex flex-col md:flex-row items-center mb-4 md:mb-0">
        <input
          type="email"
          placeholder="your email"
          className="p-2 text-sm rounded-l-lg w-full md:w-3/4 outline-none bg-[#d1a27f] text-black placeholder-black border-b border-black border-opacity-30 focus:border-opacity-100 transition mb-2 md:mb-0"
        />
        <button className="bg-[#d1a27f] text-black border-b border-black p-1 text-xs rounded-r-lg hover:bg-white hover:text-black transition whitespace-nowrap w-full md:w-auto">
          Suscríbete now
        </button>
      </div>

      {/* Imagen */}
      <div className="w-full md:w-1/3 flex justify-center">
        <Image
          src="/images/page-principal.png"
          alt="Boletín"
          width={100} // Tamaño reducido de la imagen para pantallas pequeñas
          height={100}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Contacto;
