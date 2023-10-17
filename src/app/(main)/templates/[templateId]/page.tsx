import { prisma } from "@/primsa"

export default async function Page({ params }: { params: { templateId: string } }) {

  const template = await prisma.template.findUnique({
    where: {
      id: parseInt(params.templateId)
    }
  })


  return <main>
    <h1>This is the template {params.templateId} page!</h1>
    {template ?
      <div>{JSON.stringify(template, null, 2)}</div>
      :
      <h2>No template</h2>
    }
  </main>
}
