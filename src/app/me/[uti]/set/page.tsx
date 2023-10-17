export default async function Page({ params }: { params: { uti: string } }) {
  return <main>
    <h2>Here is the admin page for the template purchased</h2>
    <h1>{params.uti}</h1>
  </main>
}
