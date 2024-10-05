import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="font-black text-6xl text-center">
        Bienvenidos a la <br /> FACHA ESPACIAL!
      </h1>

      <div className="flex gap-3">
        <Link href={"/water"}>
          <Button>Agua</Button>
        </Link>
        <Link href={"/map"}>
          <Button>Mapa</Button>
        </Link>
        <Link href={"/heatMap"}>
          <Button>Mapa de calor</Button>
        </Link>
      </div>

    </section>
  )
}
