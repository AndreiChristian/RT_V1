import NotFound from "@/components/NotFound"
import { prisma } from "@/primsa"
import Template_One from "@/templates/template_1/template_1"
import TemplateState from "../_components/TemplateState"

export default async function Page({ params }: { params: { tId: string } }) {

  const template = await prisma.template.findUnique({
    where: {
      id: parseInt(params.tId)
    }
  })

  return <>
    {template ?
      <TemplateState templateId={params.tId} />
      :
      <NotFound />
    }
  </>
}
