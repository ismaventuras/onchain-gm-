import { CountGm } from '@/components/count-gm'
import { GMFetcher } from '@/components/fetch-gm'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='container mx-auto'>
        <h1 className='text-5xl lg:text-6xl py-4 text-center'>Need a GM?</h1>      
        <div className='flex justify-center items-center gap-8 flex-col'>
          <GMFetcher />
          <CountGm />
        </div>
    </main>
  )
}
