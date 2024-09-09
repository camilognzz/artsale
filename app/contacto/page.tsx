import Image from "next/image";

const Contacto = () => {
  return (
    <div className="bg-[#F4BC44] dark:bg-[#2E2E2E] w-full py-6 flex flex-col md:flex-row justify-between items-center px-1">
      {/* Contenedor para el texto */}
      <div className="w-full md:w-1/3 text-black dark:text-gray-200 flex justify-end mb-4 md:mb-0">
        <div className="h-auto text-center flex items-center justify-end overflow-hidden">
          <p
            className="line-clamp-3 text-black dark:text-gray-200 font-bold"
            style={{
              fontSize: "1.75rem", // Tamaño reducido
              lineHeight: "1.4",
              maxWidth: "100%",
            }}
          >
            Suscríbete a nuestro{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px white",
                fontWeight: "bold",
                fontSize: "1.75rem",
                letterSpacing: "-0.02em",
              }}
            >
              boletín para recibir
            </span>{" "}
            las últimas actualizaciones
          </p>
        </div>
      </div>
      <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-center items-center mb-4 md:mb-0">
        <div className="w-full md:w-2/3 flex flex-row justify-center">
          <input
            type="email"
            placeholder="Tu correo"
            className="p-2 text-sm rounded-l-none w-full outline-none bg-[#F4BC44] dark:bg-[#3A3A3A] text-black dark:text-gray-300 placeholder-black dark:placeholder-gray-500 border-b border-black dark:border-gray-700 border-opacity-30 focus:border-opacity-100 transition mb-2 md:mb-0"
          />
          <button className="bg-[#F4BC44] dark:bg-[#3A3A3A] text-black dark:text-gray-300 border-b border-black dark:border-gray-700 border-opacity-30 p-2 text-sm hover:bg-rose-600 hover:text-black dark:hover:bg-rose-800 dark:hover:text-gray-300 transition whitespace-nowrap w-full md:w-auto rounded-none">
            Suscríbete ahora
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex justify-start">
        <Image
          src="/images/contacto-1.png"
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
