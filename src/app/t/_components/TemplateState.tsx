"use client";

import NotFound from "@/components/NotFound";
import Template_One from "@/templates/template_1/template_1";
import { useEditingStore } from "../state";
import Template_Two from "@/templates/template_2/template_2";

export default function TemplateState({ templateId }: { templateId: string }) {

  const { title, subtitle, aboutMe } = useEditingStore((state) => state)

  switch (templateId) {
    case "1":
      return <Template_One title={title} subtitle={subtitle} aboutMe={aboutMe} />
    case "2":
      return <Template_Two title={title} subtitle={subtitle} aboutMe={aboutMe} />
    default:
      return <NotFound />
  }
}
