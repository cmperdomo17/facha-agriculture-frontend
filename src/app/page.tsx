import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="flex flex-col gap-6">
      <Link href={"/water"}>
        <Button>Agua</Button>
      </Link>
      <Link href={"/map"}>
        <Button>Mapa</Button>
      </Link>
    </section>
  )
}
