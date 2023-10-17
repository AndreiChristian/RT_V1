'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
  }, [error])

  return (
    <div className='min-h-full' >
      <h2>Something went wrong!</h2>
      <Button asChild >
        <Link href={'/'}>Go back home</Link>
      </Button>
    </div>
  )
}
