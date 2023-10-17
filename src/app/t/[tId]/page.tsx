import NotFound from "@/components/NotFound"
import { prisma } from "@/primsa"

export default async function Page({ params }: { params: { tId: string } }) {

  const template = await prisma.template.findUnique({
    where: {
      id: parseInt(params.tId)
    }
  })

  return <>
    <h1>The configuration page for template {params.tId}</h1>
    {template ?
      <div>{JSON.stringify(template)}</div>
      :
      <NotFound />
    }
  </>
}
