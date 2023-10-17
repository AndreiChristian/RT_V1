import Link from "next/link"
import { Button } from "./ui/button"

interface Props {
  message?: string,
  enabled?: boolean
}

export default function NotFound({ message = "Not Found", enabled = false }: Props) {
  return <>
    {enabled ?
      <main
        className="
    bg-background
    z-50 min-h-screen w-screen fixed top-0 left-0
    flex flex-col items-center justify-center
    "
      >
        <h1>{message}</h1>
        <Button asChild >
          <Link href={'/'} >Go back home</Link>
        </Button>
      </main>
      :
      <h2 className="bg-pink-500 text-red-50 " >Content not found - you see this because the page is in development and the overlay is not enabled yet</h2>
    }
  </>
}
