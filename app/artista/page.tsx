import ListArtist from "@/components/artistlist/ListArtist";

export default function Artista() {

  return (
    <main className="w-full min-h-screen mx-auto grid place-items-center">
      <div className="titulo">
        <h4 className="font-bold text-center text-5xl">{"Descubre a"}</h4>
        <h2 className="contorno text-center text-5xl mt-1">
          nuestros artistas
        </h2>
      </div>
      <ListArtist />
    </main>
  );
}

