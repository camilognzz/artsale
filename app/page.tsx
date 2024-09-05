import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Image } from "@nextui-org/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";


export default function Home() {
    const bg = {
      background: "url('/images/bg3.png')no-repeat",
      backgroundPosition: "right"
    }

      return (
            <div className="container mx-auto md:px-20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="image p-4">
                  <Link href={"/"}>
                    <Image
                      isBlurred
                      width={650}
                      height={450}
                      src="/images/page-principal.png"
                      alt="Principal Image"
                      className="m-5 w-full object-cover"
                    />
                  </Link>
                </div>
                <div className="info p-4">
                  <div className="title">
                    <a className="text-5xl md:text-7.5xl font-bold text-gray-800 hover:text-gray-600">
                      Descubre el Arte que Inspira
                    </a>
                  </div>
                  <p className="text-gray-700 py-3">
                    Explora una colección única de obras de arte contemporáneo,
                    cuidadosamente seleccionadas para transformar tu espacio y
                    estimular tu creatividad.
                  </p>
                  <div>
                    <Button
                      className="bg-gradient-to-tr text-white shadow-lg bg-cyan-900"
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
