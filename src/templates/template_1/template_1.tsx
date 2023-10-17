import { TEMPLATE_CONTENT } from "@/models/template";



export default function Template_One({ title, aboutMe, subtitle }: TEMPLATE_CONTENT) {
  return <main
    className="
    min-h-screen bg-emerald-500 box-border
    flex items-center justify-center flex-col
    "
  >
    <section className="min-h-screen
    flex items-center justify-center flex-col
      " >
      <h1 className="text-3xl first-letter:text-5xl">{title}</h1>
      <h2>{subtitle}</h2>
    </section>
    <section className="min-h-screen
    flex items-center justify-center flex-col
      " >
      <p>{aboutMe}</p>
    </section>
  </main>
}
