import { prisma } from "@/primsa"

export default async function Page({ params }: { params: { templateId: string } }) {

  const template = await prisma.template.findFirstOrThrow({
    where: {
      id: parseInt(params.templateId)
    }
  })


  return <main>
    <h1>This is the template {params.templateId} page!</h1>
    <div>{JSON.stringify(template, null, 2)}</div>
  </main>
}
