import { prisma } from "@/primsa"
import Link from "next/link"

export default async function Page() {

  const templates = await prisma.template.findMany()

  return (
    <main>
      <h1>This are the templates page!</h1>
      {templates.length === 0 ?
        <h2>There are no templates</h2>
        :
        <ul>
          {templates.map(t => <li key={t.id}><Link href={`/t/${t.id}`} >{t.name}</Link></li>)}
        </ul>
      }
    </main>
  )
}
