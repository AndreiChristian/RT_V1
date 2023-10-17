import { prisma } from "@/primsa"

export default async function Page({ params }: { params: { userId: string } }) {

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.userId)
    }
  })

  return <main>
    <h1>User Screen</h1>
    <h2>User id : {params.userId}</h2>
    {user ?
      <div>{JSON.stringify(user)}</div>
      :
      <h2>No user</h2>
    }
  </main>
}
