import { Artist } from "@/app/domain/entities/Artist";

export const artistes: Artist[] = [
    {
      id: 1,
      thumbnail: "/images/artista1.jpg",
      name: "Ai Weiwei",
      description: "Es un artista contemporáneo chino que fusiona arte y activismo. Su obra abarca instalaciones, esculturas y fotografía, abordando temas como derechos humanos, censura y libertad de expresión. Es conocido por su crítica al gobierno chino y su defensa de la justicia social a nivel global.",
    },
    {
      id: 2,
      thumbnail: "/images/artista2.jpg",
      name: "Yayoi Kusama",
      description: "es una artista japonesa contemporánea famosa por sus instalaciones inmersivas y su obsesión con los puntos y patrones repetitivos. Su obra explora temas como el infinito, la auto-obliteración y la psicodelia. Kusama ha influido en el arte pop y minimalista, y es conocida por sus espacios que desdibujan la línea entre el espectador y la obra.",
    },
    {
      id: 3,
      thumbnail: "/images/cuadro1.png",
      name: "Espresso",
      description: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
    },
    {
      id: 4,
      thumbnail: "/images/cuadro1.png",
      name: "Latte",
      description: "A latte or caffè latte is a milk coffee that boasts a silky layer of foam as a real highlight to the drink. A true latte will be made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top",
    },
    {
      id: 5,
      thumbnail: "/images/cuadro1.png",
      name: "Macchiato",
      description: "Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed. ",
    },
  ];
  
export const URL_DEFAULT_IMAGE = "/images/artista1.jpg";