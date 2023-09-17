import { NextPage } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const NotFound: NextPage = () => (
  <div className='min-h-screen flex flex-col items-center justify-center gap-4'>
    <h1 className='text-center font-bold text-6xl'>HTTP 404</h1>
    <h2 className='text-center font-bold text-3xl'>Whoops!</h2>
    <p className='text-center font-medium'>Sadly, we could not find the page you were looking for...</p>
    <Button className='font-medium text-md' asChild>
      <Link href='/'>
        Go back to home page
      </Link>
    </Button>
  </div>
)

export default NotFound