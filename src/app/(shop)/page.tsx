import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>Hola Mundo</h1>
      <h1 className={titleFont.className}>HOla Mundo</h1>
    </main>
  );
}
