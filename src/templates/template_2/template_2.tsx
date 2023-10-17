import { TEMPLATE_CONTENT } from "@/models/template";

export default function Template_Two({ title, aboutMe, subtitle }: TEMPLATE_CONTENT) {
  return <>
    <section className="min-h-screen flex flex-col items-start justify-center " >
      <h1 className="text-5xl">{title}</h1>
      <h2 className="text-3xl">{subtitle}</h2>
      <h2 className="text-3xl">{subtitle}</h2>
      <h2 className="text-3xl">{subtitle}</h2>
      <h2 className="text-3xl">{subtitle}</h2>
    </section>
    <section className="min-h-screen flex flex-col items-start justify-center " >
      <p onClick={() => console.log("hello world")} >{aboutMe}</p>
    </section>
  </>
}
