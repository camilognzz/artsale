import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="image p-4">
          <Link href={"/"}>
            <Image
              isBlurred
              alt="Principal Image"
              className="m-5 w-full object-cover rounded-md"
              height={450}
              src="/images/page-principal.png"
              width={650}
            />
          </Link>
        </div>
        <div className="info p-4">
          <div className="title mb-4">
            <Link
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 hover:text-gray-600"
              href={"/"}
            >
              Descubre el Arte que Inspira
            </Link>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 py-3">
            Explora una colección única de obras de arte contemporáneo,
            cuidadosamente seleccionadas para transformar tu espacio y estimular
            tu creatividad.
          </p>
          <div>
            <Button
              className="bg-rose-600 text-white py-2 px-4 md:py-3 md:px-6 dark:bg-blue-900 dark:text-[#ECEDEE] dark:hover:bg-blue-800"
              radius="lg"
              size="md"
              variant="shadow"
            >
              Compra ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
